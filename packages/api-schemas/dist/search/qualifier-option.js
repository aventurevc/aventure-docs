// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchQualifierOptionSchemaDefinition = z.object({
    /** Option label. */
    label: z.string(),
    /** Search query the option runs. */
    query: z.string(),
});
/**
 * One rewritten query a qualifier offers.
 *
 * @openapiSchema SearchQualifierOption
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchQualifierSchema
 * @contractShape search.qualifier-option
 * @contractRole canonical
 */
export const SearchQualifierOptionSchema = SearchQualifierOptionSchemaDefinition;
//# sourceMappingURL=qualifier-option.js.map