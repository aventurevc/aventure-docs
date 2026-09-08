// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Logo sort priority for entity search
 *
 * @openapiSchema EntityFilterLogoOption
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.filter-logo-option
 * @contractRole canonical
 */
export const EntityFilterLogoOptionSchema = z.object({
    /** Logo sort priority. */
    sortPriority: z.enum(["NONE", "ANY_LOGO_FIRST", "REAL_LOGO_FIRST"]),
});
//# sourceMappingURL=filter-logo-option.js.map