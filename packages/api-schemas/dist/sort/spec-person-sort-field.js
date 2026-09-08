// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SortOrderPersonSortFieldSchema } from "./order-person-sort-field.js";
const SortSpecPersonSortFieldSchemaDefinition = z.object({
    /** Ordered sort terms. Empty list means unspecified at the HTTP boundary (defaults apply). */
    order: z.array(SortOrderPersonSortFieldSchema),
});
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecPersonSortField
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape sort.spec-person-sort-field
 * @contractRole canonical
 */
export const SortSpecPersonSortFieldSchema = SortSpecPersonSortFieldSchemaDefinition;
//# sourceMappingURL=spec-person-sort-field.js.map