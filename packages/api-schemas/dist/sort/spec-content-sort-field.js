// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SortOrderContentSortFieldSchema } from "./order-content-sort-field.js";
const SortSpecContentSortFieldSchemaDefinition = z.object({
    /** Ordered sort terms. Empty list means unspecified at the HTTP boundary (defaults apply). */
    order: z.array(SortOrderContentSortFieldSchema),
});
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecContentSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchInterpretationSchema
 * @contractShape sort.spec-content-sort-field
 * @contractRole canonical
 */
export const SortSpecContentSortFieldSchema = SortSpecContentSortFieldSchemaDefinition;
//# sourceMappingURL=spec-content-sort-field.js.map