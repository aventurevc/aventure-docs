// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SortOrderPublicationSortFieldSchema } from "./order-publication-sort-field.js";
const SortSpecPublicationSortFieldSchemaDefinition = z.object({
    /** Ordered sort terms. Empty list means unspecified at the HTTP boundary (defaults apply). */
    order: z.array(SortOrderPublicationSortFieldSchema),
});
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecPublicationSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSearchInterpretationSchema
 * @contractShape sort.spec-publication-sort-field
 * @contractRole canonical
 */
export const SortSpecPublicationSortFieldSchema = SortSpecPublicationSortFieldSchemaDefinition;
//# sourceMappingURL=spec-publication-sort-field.js.map