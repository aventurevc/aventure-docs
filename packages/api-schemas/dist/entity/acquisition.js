// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcquisitionEvidenceSchema } from "./acquisition-evidence.js";
import { EntityAcquisitionStageSchema } from "./acquisition-stage.js";
import { EntitySchema } from "./entity.js";
import { EntityResearchPublicSourceSchema } from "./research-public-source.js";
import { FundraiseDataConfidenceSchema } from "../fundraise/data-confidence.js";
import { FundraiseTransactionStatusSchema } from "../fundraise/transaction-status.js";
const EntityAcquisitionSchemaDefinition = z.object({
    /** Acquired company — read-only nested display projection of the scoped path entity. */
    acquiredEntity: EntitySchema,
    /** Buyer — read-only nested display projection. Mutations identify the buyer only via the flat acquirerEntityId UUID, never a nested entity object. */
    acquirerEntity: EntitySchema,
    amount: z.number().int().nullish(),
    /** Acquisition announcement date or instant, retaining its stored precision. */
    announcedAt: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Effective acquisition date or instant, retaining its stored precision. */
    asOf: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Acquisition completion date or instant, retaining its stored precision. */
    completedAt: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    currency: z.string().nullish(),
    dataConfidence: FundraiseDataConfidenceSchema.nullish(),
    evidence: EntityAcquisitionEvidenceSchema,
    /** Canonical fundraise transaction UUID */
    fundraiseTransactionId: z.uuid().nullish(),
    /** Type-safe identifier for fundraise investor joins */
    investorJoinId: z.uuid().nullish(),
    /** Whether this acquisition relationship still represents current ownership. */
    isCurrent: z.boolean().nullish(),
    /** Published page behind this acquisition, read from the provenance event that wrote it; absent for internal sources. */
    publicSource: EntityResearchPublicSourceSchema.nullish(),
    relationshipId: z.int(),
    /** Read stage of the acquired entity, not transactionStatus */
    status: EntityAcquisitionStageSchema,
    transactionStatus: FundraiseTransactionStatusSchema.nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical acquisition event: scoped entity is acquired, acquirerEntity is buyer.
 *
 * @openapiSchema EntityAcquisition
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema PageEntityAcquisitionSchema
 * @contractShape entity.acquisition
 * @contractRole canonical
 */
export const EntityAcquisitionSchema = EntityAcquisitionSchemaDefinition;
//# sourceMappingURL=acquisition.js.map