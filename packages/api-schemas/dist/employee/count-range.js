// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EmployeeCountMatchModeSchema } from "./count-match-mode.js";
const EmployeeCountRangeSchemaDefinition = z.object({
    /** Omitted or numeric matches only reported numbers, including exact-count estimates. overlap matches any intersection with a reported band; containment requires its whole interval within these bounds. Open upper bands cannot fit a finite maximum. Without either bound this entry is a no-op in every mode. */
    matchMode: EmployeeCountMatchModeSchema.nullish(),
    /** Inclusive maximum employees. */
    max: z.int().nullish(),
    /** Inclusive minimum employees. */
    min: z.int().nullish(),
});
/**
 * Inclusive range applied to one current workforce observation.
 *
 * @openapiSchema EmployeeCountRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape employee.count-range
 * @contractRole canonical
 */
export const EmployeeCountRangeSchema = EmployeeCountRangeSchemaDefinition;
//# sourceMappingURL=count-range.js.map