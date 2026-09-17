// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { PublicationFilterSchema } from "./filter.js";
import { SortSpecPublicationSortFieldSchema } from "../sort/spec-publication-sort-field.js";
const PublicationSearchInterpretationSchemaDefinition = z.object({
    /** Planner confidence in the structured interpretation. */
    confidence: ConfidenceSchema,
    /** Canonical content filter generated from the query. */
    filter: PublicationFilterSchema,
    /** Human-readable summary of how the query was interpreted. */
    interpretation: z.string(),
    /** Sort generated from the query. */
    sort: SortSpecPublicationSortFieldSchema,
    /** Unsupported constraint, or null when all were translated. */
    unsupported: z.string().nullish(),
});
/**
 * Structured interpretation of a natural-language content search.
 *
 * @openapiSchema PublicationSearchInterpretation
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSearchResultSchema
 * @contractShape publication.search-interpretation
 * @contractRole canonical
 */
export const PublicationSearchInterpretationSchema = PublicationSearchInterpretationSchemaDefinition;
//# sourceMappingURL=search-interpretation.js.map