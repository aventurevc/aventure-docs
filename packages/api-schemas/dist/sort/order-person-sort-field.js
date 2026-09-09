// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SortOrderPersonSortFieldSchemaDefinition = z.object({
    /** true for descending (DESC), false for ascending (ASC) */
    descending: z.boolean(),
    /** Sort field for this resource (entity list uses EntityFilter.Sortable / published sort keys). */
    field: z.enum([
        "ID",
        "FIRST_NAME",
        "LAST_NAME",
        "FULL_NAME",
        "SLUG",
        "CREATED_AT",
        "UPDATED_AT",
        "STATUS",
        "GENDER",
        "AMOUNT_INVESTED",
        "TOTAL_INVESTMENTS",
    ]),
});
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderPersonSortField
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchOrderingPersonSortFieldSchema
 * @contractShape sort.order-person-sort-field
 * @contractRole canonical
 */
export const SortOrderPersonSortFieldSchema = SortOrderPersonSortFieldSchemaDefinition;
//# sourceMappingURL=order-person-sort-field.js.map