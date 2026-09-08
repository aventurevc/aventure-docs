// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTagSchema } from "./tag.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
const EntityClassificationSuggestionSchemaDefinition = z.object({
    /** True when the entity already has a current or historical matching join. */
    alreadyJoined: z.boolean(),
    /** Suggested writable editorial tag or standardized classification code candidate. */
    classification: z.union([EntityTagSchema, StandardizedClassificationSchema]),
    /** Whether a missing editorial tag value may be created with type plus name instead of tagId. */
    creatable: z.boolean(),
    /** One-based rank within this suggestion response. */
    rank: z.int(),
    /** Composite embedding similarity score; larger values rank higher. */
    score: z.number(),
    /** Whether this suggestion can be joined through the classification mutation endpoint. */
    writable: z.boolean(),
});
/**
 * Ranked classification suggestion derived from the enriched entity profile and classification centroid embeddings. Returned by the default classification discovery endpoint before callers create source-backed classification joins.
 *
 * @openapiSchema EntityClassificationSuggestion
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @contractShape entity.classification-suggestion
 * @contractRole canonical
 */
export const EntityClassificationSuggestionSchema = EntityClassificationSuggestionSchemaDefinition;
//# sourceMappingURL=classification-suggestion.js.map