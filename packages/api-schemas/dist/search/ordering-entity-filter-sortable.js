// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchRelevanceSchema } from "./relevance.js";
import { SortOrderEntityFilterSortableSchema } from "../sort/order-entity-filter-sortable.js";
const SearchOrderingEntityFilterSortableSchemaDefinition = z.object({
    /** Sortable-column terms applied after the relevance rank, highest precedence first. Empty when the relevance rank alone ordered the page. Listing priorities that every list page applies ahead of these terms, such as operating-status and logo priority, are not reported. */
    order: z.array(SortOrderEntityFilterSortableSchema),
    /** Relevance rank applied before any column term; absent when no relevance rank ran. */
    relevance: SearchRelevanceSchema.nullish(),
});
/**
 * Ordering applied to a search result page: an optional relevance rank that precedes the sortable-column terms.
 *
 * @openapiSchema SearchOrderingEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.ordering-entity-filter-sortable
 * @contractRole canonical
 */
export const SearchOrderingEntityFilterSortableSchema = SearchOrderingEntityFilterSortableSchemaDefinition;
//# sourceMappingURL=ordering-entity-filter-sortable.js.map