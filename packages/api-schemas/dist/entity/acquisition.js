// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcquisitionDealStatusSchema } from "./acquisition-deal-status.js";
import { EntityAcquisitionEvidenceSchema } from "./acquisition-evidence.js";
import { EntityAcquisitionStageSchema } from "./acquisition-stage.js";
import { EntitySchema } from "./entity.js";
import { EntityResearchPublicSourceSchema } from "./research-public-source.js";
import { FundraiseDataConfidenceSchema } from "../fundraise/data-confidence.js";
import { FundraiseTransactionStatusSchema } from "../fundraise/transaction-status.js";
const EntityAcquisitionSchemaDefinition = z.object({
    /** The acquired company (the entity in the request path); read-only. */
    acquiredEntity: EntitySchema,
    /** The buyer; read-only. Mutations identify the buyer only via the flat acquirerEntityId UUID, never a nested entity object. */
    acquirerEntity: EntitySchema,
    amount: z.number().int().nullish(),
    /** Acquisition announcement date or instant, retaining its stored precision. */
    announcedAt: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Effective acquisition date the server derives on write: announcedAt, else completedAt, else the submitted asOf, as a calendar day; it can differ from the asOf written. */
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
    /** Whether the deal is Pending (announced, not closed), Completed, or Canceled before closing. The server derives it from transactionStatus and completedAt; present this value instead of interpreting those fields. */
    dealStatus: EntityAcquisitionDealStatusSchema.optional(),
    evidence: EntityAcquisitionEvidenceSchema,
    /** Funding round id (UUID) */
    fundraiseTransactionId: z.uuid().nullish(),
    /** Identifier of one investor's participation in a funding round */
    investorJoinId: z.uuid().nullish(),
    /** Whether the buyer still owns the acquired company, not whether the company is operating. False retains the prior ownership event on this relationship. */
    isCurrent: z.boolean().nullish(),
    /** Published page behind this acquisition, read from the provenance event that wrote it; absent for internal sources. */
    publicSource: EntityResearchPublicSourceSchema.nullish(),
    relationshipId: z.int(),
    /** Acquisition stage of the acquired entity, not the deal's transactionStatus */
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