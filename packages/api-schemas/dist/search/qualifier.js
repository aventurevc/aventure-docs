// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchQualifierOptionSchema } from "./qualifier-option.js";
/**
 * A prompt offered beside a broad query's results, with rewritten queries that narrow or widen it.
 *
 * @openapiSchema SearchQualifier
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape search.qualifier
 * @contractRole canonical
 */
export const SearchQualifierSchema = z.object({
    /** Stable qualifier key. */
    key: z.string(),
    /** Rewritten queries the reader can run instead, in display order. */
    option: z.array(SearchQualifierOptionSchema),
    /** Text shown above the options. */
    prompt: z.string(),
});
//# sourceMappingURL=qualifier.js.map