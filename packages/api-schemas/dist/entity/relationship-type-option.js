// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { RelationshipDirectionSchema } from "../relationship/direction.js";
const EntityRelationshipTypeOptionSchemaDefinition = z.object({
    /** Whether this type must be written through acquisition endpoints. */
    acquisitionManaged: z.boolean(),
    /** Accepted aliases that normalize to canonical. */
    alias: z.array(z.string()),
    /** Canonical relationship type token used in reads and writes. */
    canonical: z.string(),
    /** Human-readable catalog meaning and placement guidance. */
    description: z.string(),
    /** How to interpret sourceEntityId and targetEntityId. DIRECTIONAL means sourceRole and targetRole are authoritative. */
    direction: RelationshipDirectionSchema,
    /** Relationship types that cannot coexist for one unordered pair. */
    exclusiveRelationshipType: z.array(z.string()),
    /** Whether generic relationship join/write endpoints accept this type. */
    joinable: z.boolean(),
    /** Entity type pairing rule enforced before persistence. */
    pairRule: z.string(),
    /** Whether this type is emitted by reads only and rejected on writes. */
    readOnly: z.boolean(),
    /** Role of sourceEntityId for directional/type-oriented rows. For affinity this is member. */
    sourceRole: z.string().nullish(),
    /** Role of targetEntityId for directional/type-oriented rows. For affinity this is provider. */
    targetRole: z.string().nullish(),
});
/**
 * Published relationship catalog row. Directional values use sourceRole and targetRole to name sourceEntityId and targetEntityId.
 *
 * @openapiSchema EntityRelationshipTypeOption
 * @endpoint GET /v1/entities/relationships/types
 * @contractShape entity.relationship-type-option
 * @contractRole canonical
 */
export const EntityRelationshipTypeOptionSchema = EntityRelationshipTypeOptionSchemaDefinition;
//# sourceMappingURL=relationship-type-option.js.map