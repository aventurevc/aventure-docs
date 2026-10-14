// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTagSchema } from "./tag.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
const EntityClassificationSuggestionSchemaDefinition = z.object({
    /** True when the entity already has this classification, current or historical. */
    alreadyJoined: z.boolean(),
    /** Suggested classification tag or standardized classification code. */
    classification: z.union([EntityTagSchema, StandardizedClassificationSchema]),
    /** One-based rank within this suggestion response. */
    rank: z.int(),
    /** Composite embedding similarity score; larger values rank higher. */
    score: z.number(),
});
/**
 * Ranked classification suggestion derived from the entity profile and classification embeddings.
 *
 * @openapiSchema EntityClassificationSuggestion
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @contractShape entity.classification-suggestion
 * @contractRole canonical
 */
export const EntityClassificationSuggestionSchema = EntityClassificationSuggestionSchemaDefinition;
//# sourceMappingURL=classification-suggestion.js.map