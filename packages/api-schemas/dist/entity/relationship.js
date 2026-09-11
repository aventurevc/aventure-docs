// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityComparisonSignalsSchema } from "./comparison-signals.js";
import { EntitySchema } from "./entity.js";
const EntityRelationshipSchemaDefinition = z.object({
    /** Effective date for this relationship when known */
    asOf: z.iso.date().nullish(),
    /** Competitive comparison signals for the joined entity when it is a product/service provider — sells-to, pricing model, ownership, funding, and website. Null for every other joined entity. Lets comparison surfaces render provider columns without a second per-provider fetch. */
    comparisonSignals: EntityComparisonSignalsSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Relationship-specific detail. acceleratorParticipant rows use `batch=<label>`, or `program=<name>; batch=<label>` only for a distinct sub-program. program= never repeats the accelerator name or the batch, and batch= never contains the accelerator name — the row already points to the accelerator entity. */
    detail: z.string().nullish(),
    /** Joined entity on the other side of this relationship — read-only display projection. Writes identify both sides only via the flat sourceEntityId and targetEntityId UUIDs, never a nested entity object. */
    entity: EntitySchema,
    /** Integer entity_relationship.id row id, not an entity UUID */
    id: z.int().nullish(),
    /** Current-state curation flag for this relationship row. Default relationship reads return only rows where isCurrent=true and isPrimary=true. */
    isCurrent: z.boolean().nullish(),
    /** Primary/renderable curation flag for this relationship row. isCurrent=false or isPrimary=false hides the row from default relationship reads. */
    isPrimary: z.boolean().nullish(),
    /** Nested relationships for the joined entity */
    get relationship() {
        return z.array(EntityRelationshipSchemaDefinition);
    },
    /** Canonical relationship type, one of: acceleratorParticipant, acquirer, affinity, calculated, competingProductService, competitor, customer, fundManagerFirm, parent, productService, serviceProvider, similarCompany, spinOffFrom, successor. Similarity endpoint rows use stored relationship types when a curation row exists and calculated when the row comes from semantic/vector similarity. */
    relationshipType: z.string(),
    /** Source URL or compact source label copied to the relationship row */
    source: z.string().nullish(),
    /** Canonical source entity UUID stored on the relationship row. Compare with the requested entity id and `/v1/entities/relationships/types` sourceRole/targetRole to orient directional relationships such as parent. */
    sourceEntityId: z.uuid().nullish(),
    /** Canonical target entity UUID stored on the relationship row. Compare with the requested entity id and `/v1/entities/relationships/types` sourceRole/targetRole to orient directional relationships such as parent. */
    targetEntityId: z.uuid().nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Domain record for entity relationships - oriented from the requested entity to the joined entity
 *
 * @openapiSchema EntityRelationship
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageEntityRelationshipSchema
 * @contractShape entity.relationship
 * @contractRole canonical
 */
export const EntityRelationshipSchema = EntityRelationshipSchemaDefinition;
//# sourceMappingURL=relationship.js.map