// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * ISO-8601 timestamp range for temporal filters.
 *
 * @openapiSchema DateRange
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
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @contractShape date.range
 * @contractRole canonical
 */
export const DateRangeSchema = z.object({
    /** Inclusive latest timestamp. */
    max: z.iso.datetime({ offset: true }).nullish(),
    /** Inclusive earliest timestamp. */
    min: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=range.js.map