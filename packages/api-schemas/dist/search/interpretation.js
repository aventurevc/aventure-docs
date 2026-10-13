// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { EntityListFilterSchema } from "../entity/list-filter.js";
import { SearchIntentSchema } from "./intent.js";
import { SearchModeExecutionSchema } from "./mode-execution.js";
import { SearchOrderingEntityFilterSortableSchema } from "./ordering-entity-filter-sortable.js";
const SearchInterpretationSchemaDefinition = z.object({
    /** Planner confidence in the structured interpretation. */
    confidence: ConfidenceSchema,
    /** Requested and executed search strategy. */
    execution: SearchModeExecutionSchema,
    /** True when the semantic fallback replaced an untranslatable planner result with a semantic search over the original query. */
    fallbackUsed: z.boolean(),
    /** Canonical entity filter generated from the natural-language query. */
    filter: EntityListFilterSchema,
    /** Question shape the planner read from the query. */
    intent: SearchIntentSchema,
    /** Human-readable summary of how the query was interpreted. */
    interpretation: z.string(),
    /** Ordering applied to the result page: the relevance rank that ran first, if any, then the sortable-column terms. */
    sort: SearchOrderingEntityFilterSortableSchema,
    /** Brand or legal names of the entities the question is about, as written in the query; empty for discovery questions. */
    subjectEntityName: z.array(z.string()),
    /** Constraint the planner could not translate into the canonical EntityFilter contract; null when every material constraint was supported. */
    unsupported: z.string().nullish(),
});
/**
 * Structured interpretation of a natural-language entity search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate.
 *
 * @openapiSchema SearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.interpretation
 * @contractRole canonical
 */
export const SearchInterpretationSchema = SearchInterpretationSchemaDefinition;
//# sourceMappingURL=interpretation.js.map