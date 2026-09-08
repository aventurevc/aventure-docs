// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { ContentFilterSchema } from "./filter.js";
import { SortSpecContentSortFieldSchema } from "../sort/spec-content-sort-field.js";
const ContentSearchInterpretationSchemaDefinition = z.object({
    /** Planner confidence in the structured interpretation. */
    confidence: ConfidenceSchema,
    /** Canonical content filter generated from the query. */
    filter: ContentFilterSchema,
    /** Human-readable summary of how the query was interpreted. */
    interpretation: z.string(),
    /** Sort generated from the query. */
    sort: SortSpecContentSortFieldSchema,
    /** Unsupported constraint, or null when all were translated. */
    unsupported: z.string().nullish(),
});
/**
 * Structured interpretation of a natural-language content search.
 *
 * @openapiSchema ContentSearchInterpretation
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchResultSchema
 * @contractShape content.search-interpretation
 * @contractRole canonical
 */
export const ContentSearchInterpretationSchema = ContentSearchInterpretationSchemaDefinition;
//# sourceMappingURL=search-interpretation.js.map