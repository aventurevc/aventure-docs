// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SortOrderEntityFilterSortableSchemaDefinition = z.object({
    /** true for descending (DESC), false for ascending (ASC) */
    descending: z.boolean(),
    /** Sort field for this resource (entity list uses EntityFilter.Sortable / published sort keys). */
    field: z.enum([
        "ID",
        "NAME_BRAND",
        "YEAR_FOUNDED",
        "STATUS_OPERATING",
        "UPDATED_AT",
        "CREATED_AT",
        "TOTAL_RAISED",
        "AMOUNT_INVESTED",
        "RECENT_INVESTMENT_AT",
        "STAGE",
        "MOST_RECENT_AMOUNT",
        "LATEST_VALUATION",
        "MOST_RECENT_DATE",
        "ACCELERATOR_BRAND",
        "ACCELERATOR_COHORT",
        "HEADQUARTERS_COUNTRY",
        "EMPLOYEE_COUNT",
    ]),
    /** Request sort key for this field: pass `sort=<sortKey>,<asc|desc>` to the matching directory list endpoint to reproduce this term. Absent when the field has no request key. */
    sortKey: z.string().nullish(),
});
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchOrderingEntityFilterSortableSchema
 * @contractShape sort.order-entity-filter-sortable
 * @contractRole canonical
 */
export const SortOrderEntityFilterSortableSchema = SortOrderEntityFilterSortableSchemaDefinition;
//# sourceMappingURL=order-entity-filter-sortable.js.map