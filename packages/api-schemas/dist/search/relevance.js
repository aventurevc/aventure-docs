// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Relevance rank that ordered a search page before any sortable column.
 *
 * @openapiSchema SearchRelevance
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchOrderingEntityFilterSortableSchema
 * @usedBySchema SearchOrderingPersonSortFieldSchema
 * @contractShape search.relevance
 * @contractRole canonical
 */
export const SearchRelevanceSchema = z.enum(["keyword", "semantic"]);
//# sourceMappingURL=relevance.js.map