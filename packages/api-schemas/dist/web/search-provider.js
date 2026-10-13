// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Upstream web search provider: SERPAPI is Google results through SerpAPI, EXA is Exa's instant search with highlights, and EXA_DEEP is Exa's slower, broader deep search.
 *
 * @openapiSchema WebSearchProvider
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-provider
 * @contractRole canonical
 */
export const WebSearchProviderSchema = z.union([
    z.enum(["SERPAPI", "EXA", "EXA_DEEP"]),
    z.string(),
]);
//# sourceMappingURL=search-provider.js.map