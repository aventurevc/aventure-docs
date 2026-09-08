// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Sortable fields for public content cards.
 *
 * @openapiSchema ContentSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema SortOrderContentSortFieldSchema
 * @contractShape content.sort-field
 * @contractRole canonical
 */
export const ContentSortFieldSchema = z.enum([
    "CONTENT_ID",
    "CONTENT_TYPE",
    "RELATION",
    "TITLE",
    "TOPIC",
    "YEAR",
    "PUBLISHED_AT",
    "CREATED_AT",
    "UPDATED_AT",
]);
//# sourceMappingURL=sort-field.js.map