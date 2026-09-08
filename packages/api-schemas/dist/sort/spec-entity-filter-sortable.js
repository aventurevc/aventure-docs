// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SortOrderEntityFilterSortableSchema } from "./order-entity-filter-sortable.js";
const SortSpecEntityFilterSortableSchemaDefinition = z.object({
    /** Ordered sort terms. Empty list means unspecified at the HTTP boundary (defaults apply). */
    order: z.array(SortOrderEntityFilterSortableSchema),
});
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchInterpretationSchema
 * @contractShape sort.spec-entity-filter-sortable
 * @contractRole canonical
 */
export const SortSpecEntityFilterSortableSchema = SortSpecEntityFilterSortableSchemaDefinition;
//# sourceMappingURL=spec-entity-filter-sortable.js.map