import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import test from 'node:test';

async function observeResponse(handler, consume, input) {
  const server = createServer(handler).listen(0, '127.0.0.1');
  await once(server, 'listening');
  const nativeFetch = globalThis.fetch;
  const log = console.log;
  const lines = [];
  let actualResponse;
  let calls = 0;
  // Forward the selected SDK URL to this real local HTTP server, never Fern.
  globalThis.fetch = async () => {
    calls++;
    actualResponse = await nativeFetch(`http://127.0.0.1:${server.address().port}`);
    return actualResponse;
  };
  console.log = (line) => lines.push(line);
  try {
    await import(`./fern-ledger-response.mjs?case=${Math.random()}`);
    const response = await fetch(new Request('https://registry.buildwithfern.com/docs-ledger/register/finish'), {}, undefined, ['finish'], input);
    assert.equal(calls, 1);
    assert.equal(response, actualResponse);
    assert.equal(response.bodyUsed, false);
    await consume(response, lines, server);
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = nativeFetch;
    console.log = log;
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
}

test('observes a real negative HTTP response without consuming or replacing it', async () => {
  const body = '<html>upstream unavailable</html>';
  await observeResponse((_request, response) => {
    response.writeHead(502, { 'content-type': 'text/html; charset=utf-8' });
    response.end(body);
  }, async (response, lines) => {
    assert.equal(await response.text(), body);
    assert.match(lines[0], /^\[ledger-response\] phase=finish status=502 contentType=HTML durationMs=\d+$/);
    assert.equal(lines.length, 1);
  });
});

test('separates JSON body completion from HTTP 200 headers without retaining values', async () => {
  const body = JSON.stringify({ code: 'INTERNAL_SERVER_ERROR', status: 500, message: 'SECRET_MESSAGE', data: { url: 'SECRET_URL' }, SECRET_KEY: 'SECRET_VALUE' });
  await observeResponse((_request, response) => {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(body);
  }, async (response, lines) => {
    assert.equal(lines.length, 1);
    assert.equal(await response.text(), body);
    assert.equal(lines[1], '[ledger-body] phase=finish read=started');
    assert.match(lines[2], /^\[ledger-body\] phase=finish read=ok json=object keys=code,status,message,data otherKeys=1 missing=deploymentId,siteId,deploymentHash,reusedDeployment code=INTERNAL_SERVER_ERROR errorStatus=500 durationMs=\d+$/);
    assert.ok(!lines.join('\n').includes('SECRET'));
  });
});

test('classifies malformed and successful JSON without retaining their content', async () => {
  for (const [body, expected] of [
    ['{SECRET_INVALID_JSON', 'json=invalid keys=none otherKeys=0 missing=none code=absent'],
    [JSON.stringify({ deploymentId: 'SECRET_ID', siteId: 'SECRET_SITE', deploymentHash: 'SECRET_HASH', reusedDeployment: false }), 'json=object keys=deploymentId,siteId,deploymentHash,reusedDeployment otherKeys=0 missing=none code=absent'],
    [JSON.stringify({ code: 'SECRET_CODE', message: 'SECRET_MESSAGE' }), 'json=object keys=code,message otherKeys=0 missing=deploymentId,siteId,deploymentHash,reusedDeployment code=other'],
  ]) {
    await observeResponse((_request, response) => {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(body);
    }, async (response, lines) => {
      assert.equal(await response.text(), body);
      assert.ok(lines[2].includes(expected));
      assert.ok(!lines.join('\n').includes('SECRET'));
    });
  }
});

test('records public publisher file keys and digests without retaining private input', async () => {
  const indexHash = 'a'.repeat(64);
  const llmsHash = 'b'.repeat(64);
  const input = { token: 'SECRET_TOKEN', locales: [{ fileManifest: {
    '.well-known/agent-skills/index.json': { hash: indexHash, contentLength: 9315 },
    'llms.txt': { hash: llmsHash, contentLength: 5870 },
    'private/SECRET_FILE': { hash: 'c'.repeat(64), contentLength: 10 },
  } }] };
  await observeResponse((_request, response) => {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end('{}');
  }, async (response, lines) => {
    assert.equal(lines[0], `[ledger-file] phase=finish path=.well-known/agent-skills/index.json hash=${indexHash} bytes=9315`);
    assert.equal(lines[1], `[ledger-file] phase=finish path=llms.txt hash=${llmsHash} bytes=5870`);
    assert.equal(lines[2], '[ledger-files] phase=finish observed=true locales=1 selected=2');
    assert.ok(!lines.join('\n').includes('SECRET'));
    assert.equal(await response.text(), '{}');
  }, input);
});

test('observes a real interrupted JSON body while preserving the original read error', async () => {
  await observeResponse((_request, response) => {
    response.writeHead(200, { 'content-type': 'application/json', 'content-length': '100' });
    response.write('{');
  }, async (response, lines, server) => {
    const read = response.text();
    server.closeAllConnections();
    await assert.rejects(read, TypeError);
    assert.equal(lines[1], '[ledger-body] phase=finish read=started');
    assert.match(lines[2], /^\[ledger-body\] phase=finish read=error errorName=TypeError causeCode=UND_ERR_SOCKET durationMs=\d+$/);
  });
});
