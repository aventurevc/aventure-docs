// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "./list.js";
import { EntitySimilarityOriginSchema } from "./similarity-origin.js";
const EntitySuggestionSchemaDefinition = z.object({
    /** True when this candidate already backs the slot for the entity (a curated row). */
    alreadyPresent: z.boolean(),
    /** Candidate entity list row; load full detail through the entity detail reads. */
    candidate: EntityListSchema,
    /** One-based rank within this suggestion response. */
    rank: z.int(),
    /** Composite semantic similarity score; larger values rank higher. */
    score: z.number(),
    /** Why this candidate was suggested — the similarity provenance origin, not free text. */
    whySuggested: EntitySimilarityOriginSchema,
});
/**
 * One advisory suggestion candidate. The candidate row is the canonical entity list projection; whySuggested reuses the similarity provenance origin as confidence.
 *
 * @openapiSchema EntitySuggestion
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @usedBySchema EntitySuggestionResultSchema
 * @contractShape entity.suggestion
 * @contractRole canonical
 */
export const EntitySuggestionSchema = EntitySuggestionSchemaDefinition;
//# sourceMappingURL=suggestion.js.map