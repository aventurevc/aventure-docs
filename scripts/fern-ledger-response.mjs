// Passive metadata only: the SDK remains the sole request and body owner.
const fetch = globalThis.fetch;

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
    return response;
  });
};
