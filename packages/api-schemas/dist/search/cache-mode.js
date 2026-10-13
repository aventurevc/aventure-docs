// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Search-stage cache policy: use reuses completed and in-flight work; bypass computes independently without retaining search outputs; refresh computes independently and replaces the normal cache entry. Immutable query vectors and canonical record caches retain their own cache policy.
 *
 * @openapiSchema SearchCacheMode
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema FederatedNaturalSearchSchema
 * @usedBySchema NaturalSearchSchema
 * @contractShape search.cache-mode
 * @contractRole canonical
 */
export const SearchCacheModeSchema = z.enum(["use", "bypass", "refresh"]);
//# sourceMappingURL=cache-mode.js.map