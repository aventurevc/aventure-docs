// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebSearchProviderSchemaKnownMembers = z.enum(["SERPAPI", "EXA", "EXA_DEEP", "BRIGHT_DATA"]);
/**
 * Upstream web search provider: SERPAPI is Google results through SerpAPI, EXA is Exa's instant search with highlights, EXA_DEEP is Exa's slower, broader deep search, and BRIGHT_DATA is Google results through Bright Data's SERP access.
 *
 * @openapiSchema WebSearchProvider
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-provider
 * @contractRole canonical
 */
export const WebSearchProviderSchema = Object.assign(z.union([WebSearchProviderSchemaKnownMembers, z.string()]), { enum: WebSearchProviderSchemaKnownMembers.enum });
//# sourceMappingURL=search-provider.js.map