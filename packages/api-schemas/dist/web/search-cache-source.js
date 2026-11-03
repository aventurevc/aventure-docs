// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * ANY reuses a compatible cached web search from any provider, checking the selected provider first. PROVIDER restricts reuse to the selected live provider. Neither option changes bypassCache, which always fetches from the live provider.
 *
 * @openapiSchema WebSearchCacheSource
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-cache-source
 * @contractRole canonical
 */
export const WebSearchCacheSourceSchema = z.enum(["ANY", "PROVIDER"]);
//# sourceMappingURL=search-cache-source.js.map