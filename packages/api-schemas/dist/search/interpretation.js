// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { EntityListFilterSchema } from "../entity/list-filter.js";
import { SearchModeExecutionSchema } from "./mode-execution.js";
import { SortSpecEntityFilterSortableSchema } from "../sort/spec-entity-filter-sortable.js";
const SearchInterpretationSchemaDefinition = z.object({
    /** Planner confidence in the structured interpretation. */
    confidence: ConfidenceSchema,
    /** Requested and executed search strategy. */
    execution: SearchModeExecutionSchema,
    /** True when the semantic fallback replaced an untranslatable planner result with a semantic search over the original query. */
    fallbackUsed: z.boolean(),
    /** Canonical entity filter generated from the natural-language query. */
    filter: EntityListFilterSchema,
    /** Human-readable summary of how the query was interpreted. */
    interpretation: z.string(),
    /** Sort applied to the result page. Empty when the page was ordered by semantic relevance rank instead of a sortable column. */
    sort: SortSpecEntityFilterSortableSchema,
    /** Constraint the planner could not translate into the canonical EntityFilter contract; null when every material constraint was supported. */
    unsupported: z.string().nullish(),
});
/**
 * Structured interpretation of a natural-language entity search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate.
 *
 * @openapiSchema SearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.interpretation
 * @contractRole canonical
 */
export const SearchInterpretationSchema = SearchInterpretationSchemaDefinition;
//# sourceMappingURL=interpretation.js.map