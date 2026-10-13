// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const IntRangeSchemaDefinition = z.object({
    /** Inclusive maximum integer. */
    max: z.int().nullish(),
    /** Inclusive minimum integer. */
    min: z.int().nullish(),
});
/**
 * Integer range for count-based filter criteria
 *
 * @openapiSchema IntRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema InvestorActivityFilterSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @contractShape int.range
 * @contractRole canonical
 */
export const IntRangeSchema = IntRangeSchemaDefinition;
//# sourceMappingURL=range.js.map