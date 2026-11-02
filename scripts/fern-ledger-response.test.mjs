import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import test from 'node:test';

test('observes a real negative HTTP response without consuming or replacing it', async () => {
  const body = '<html>upstream unavailable</html>';
  const server = createServer((_request, response) => {
    response.writeHead(502, { 'content-type': 'text/html; charset=utf-8' });
    response.end(body);
  }).listen(0, '127.0.0.1');
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
    await import('./fern-ledger-response.mjs');
    const response = await fetch(new Request('https://registry.buildwithfern.com/docs-ledger/register/finish'));
    assert.equal(calls, 1);
    assert.equal(response, actualResponse);
    assert.equal(response.bodyUsed, false);
    assert.equal(await response.text(), body);
    assert.match(lines[0], /^\[ledger-response\] phase=finish status=502 contentType=HTML durationMs=\d+$/);
    assert.equal(lines.length, 1);
  } finally {
    globalThis.fetch = nativeFetch;
    console.log = log;
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
});
