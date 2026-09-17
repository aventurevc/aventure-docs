// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PublicationSortFieldSchema } from "../publication/sort-field.js";
const SortOrderPublicationSortFieldSchemaDefinition = z.object({
    /** true for descending (DESC), false for ascending (ASC) */
    descending: z.boolean(),
    /** Sort field for this resource (entity list uses EntityFilter.Sortable / published sort keys). */
    field: PublicationSortFieldSchema,
});
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderPublicationSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema SortSpecPublicationSortFieldSchema
 * @contractShape sort.order-publication-sort-field
 * @contractRole canonical
 */
export const SortOrderPublicationSortFieldSchema = SortOrderPublicationSortFieldSchemaDefinition;
//# sourceMappingURL=order-publication-sort-field.js.map