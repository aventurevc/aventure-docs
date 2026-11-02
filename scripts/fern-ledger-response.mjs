// The SDK remains the sole request/body consumer; observe its text read without cloning.
const fetch = globalThis.fetch;
const finishKeys = ['deploymentId', 'siteId', 'deploymentHash', 'reusedDeployment'];
const registerKeys = ['deploymentHash', 'missingContent'];
const envelopeKeys = [...finishKeys, 'additionalSiteIds', 'translationsProcessed', 'missingContent', 'defined', 'code', 'status', 'message', 'data'];
const errorCodes = ['BAD_REQUEST', 'UNAUTHORIZED', 'FORBIDDEN', 'NOT_FOUND', 'METHOD_NOT_SUPPORTED', 'NOT_ACCEPTABLE', 'TIMEOUT', 'CONFLICT', 'PRECONDITION_FAILED', 'PAYLOAD_TOO_LARGE', 'UNSUPPORTED_MEDIA_TYPE', 'UNPROCESSABLE_CONTENT', 'TOO_MANY_REQUESTS', 'CLIENT_CLOSED_REQUEST', 'INTERNAL_SERVER_ERROR', 'NOT_IMPLEMENTED', 'BAD_GATEWAY', 'SERVICE_UNAVAILABLE', 'GATEWAY_TIMEOUT'];
const errorNames = ['Error', 'TypeError', 'SyntaxError', 'AbortError', 'TimeoutError'];
const causeCodes = ['UND_ERR_SOCKET', 'UND_ERR_BODY_TIMEOUT', 'UND_ERR_HEADERS_TIMEOUT', 'UND_ERR_CONNECT_TIMEOUT', 'UND_ERR_ABORTED', 'ECONNRESET', 'ETIMEDOUT'];

function bodyShape(text, phase) {
  let value;
  try {
    value = text ? JSON.parse(text) : undefined;
  } catch {
    return 'json=invalid keys=none otherKeys=0 missing=none code=absent errorStatus=absent';
  }
  const type = value === undefined ? 'empty' : value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
  const keys = type === 'object' ? Object.keys(value) : [];
  const known = keys.filter((key) => envelopeKeys.includes(key));
  const required = phase === 'finish' ? finishKeys : registerKeys;
  const missing = required.filter((key) => !keys.includes(key));
  const code = type !== 'object' || value.code == null ? 'absent' : errorCodes.includes(value.code) ? value.code : 'other';
  const status = type === 'object' && Number.isInteger(value.status) && value.status >= 100 && value.status <= 599 ? value.status : 'absent';
  return `json=${type} keys=${known.join(',') || 'none'} otherKeys=${keys.length - known.length} missing=${missing.join(',') || 'none'} code=${code} errorStatus=${status}`;
}

globalThis.fetch = function (...args) {
  let phase;
  try {
    const url = new URL(args[0] instanceof Request ? args[0].url : args[0]);
    if (url.origin === 'https://registry.buildwithfern.com') {
      if (url.pathname === '/docs-ledger/register') phase = 'register';
      if (url.pathname === '/docs-ledger/register/finish') phase = 'finish';
    }
  } catch {
    // Leave invalid input validation to fetch.
  }
  if (!phase) return Reflect.apply(fetch, this, args);
  const start = performance.now();
  return Reflect.apply(fetch, this, args).then((response) => {
    const mediaType = response.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase();
    const contentType = !mediaType ? 'absent'
      : mediaType === 'application/json' || mediaType.endsWith('+json') ? 'JSON'
      : mediaType === 'text/html' ? 'HTML' : 'other';
    const durationMs = Math.round(performance.now() - start);
    console.log(`[ledger-response] phase=${phase} status=${response.status} contentType=${contentType} durationMs=${durationMs}`);
    if (contentType === 'JSON') {
      // Pinned oRPC reads JSON with text(), then JSON.parse; headers alone are not completion.
      const text = response.text;
      response.text = async function (...readArgs) {
        const readStart = performance.now();
        console.log(`[ledger-body] phase=${phase} read=started`);
        let body;
        try {
          body = await Reflect.apply(text, this, readArgs);
        } catch (error) {
          const name = errorNames.includes(error?.name) ? error.name : 'other';
          const cause = causeCodes.includes(error?.cause?.code) ? error.cause.code : 'other';
          console.log(`[ledger-body] phase=${phase} read=error errorName=${name} causeCode=${cause} durationMs=${Math.round(performance.now() - readStart)}`);
          throw error;
        }
        console.log(`[ledger-body] phase=${phase} read=ok ${bodyShape(body, phase)} durationMs=${Math.round(performance.now() - readStart)}`);
        return body;
      };
    }
    return response;
  });
};
