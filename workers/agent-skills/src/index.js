// Serves docs.aventure.vc/.well-known/agent-skills/* while Fern's host answers 404 for that published bundle
// (aventurevc/back-end#8016). Fern's answer wins whenever it is not a 404, so this Worker steps aside once Fern
// serves the bundle. Otherwise it returns the exact published bytes from this repository's main branch, the
// branch publish-docs deploys, so every artifact still matches the digest its index.json declares.
const PUBLISHED = "https://raw.githubusercontent.com/aventurevc/aventure-docs/main/fern";
const PREFIX = "/.well-known/agent-skills";
const CONTENT_TYPES = {
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".tgz": "application/gzip",
};

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405, headers: { allow: "GET, HEAD" } });
    }
    const fern = await fetch(request);
    if (fern.status !== 404) return fern;

    const { pathname } = new URL(request.url);
    if (pathname !== PREFIX && !pathname.startsWith(`${PREFIX}/`)) return fern;
    const path = pathname === PREFIX || pathname === `${PREFIX}/` ? `${PREFIX}/index.json` : pathname;
    const published = await fetch(PUBLISHED + path, { cf: { cacheEverything: true, cacheTtl: 300 } });
    if (!published.ok) return fern;

    const extension = path.slice(path.lastIndexOf("."));
    return new Response(request.method === "HEAD" ? null : published.body, {
      status: 200,
      headers: {
        "content-type": CONTENT_TYPES[extension] ?? "application/octet-stream",
        "cache-control": "public, max-age=300",
        "access-control-allow-origin": "*",
      },
    });
  },
};
