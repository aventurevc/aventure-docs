// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAcquisitionEvidenceSchema } from "./acquisition-evidence.js";
import { EntityAcquisitionStageSchema } from "./acquisition-stage.js";
import { EntitySchema } from "./entity.js";
import { FundraiseDataConfidenceSchema } from "../fundraise/data-confidence.js";
import { FundraiseTransactionStatusSchema } from "../fundraise/transaction-status.js";
const EntityAcquisitionSchemaDefinition = z.object({
    /** Acquired company — read-only nested display projection of the scoped path entity. */
    acquiredEntity: EntitySchema,
    /** Buyer — read-only nested display projection. Mutations identify the buyer only via the flat acquirerEntityId UUID, never a nested entity object. */
    acquirerEntity: EntitySchema,
    amount: z.number().int().nullish(),
    announcedAt: z.iso.datetime({ offset: true }).nullish(),
    asOf: z.iso.date().nullish(),
    completedAt: z.iso.datetime({ offset: true }).nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    currency: z.string().nullish(),
    dataConfidence: FundraiseDataConfidenceSchema.nullish(),
    evidence: EntityAcquisitionEvidenceSchema,
    /** Canonical fundraise transaction UUID */
    fundraiseTransactionId: z.uuid().nullish(),
    /** Type-safe identifier for fundraise investor joins */
    investorJoinId: z.uuid().nullish(),
    relationshipId: z.int(),
    source: z.string().nullish(),
    /** Read stage, not transactionStatus: Acquisition before operating-status change; Acquired Subsidiary for active completed acquisitions; Acquired for terminal/folded/closed (including Closed (Acquihire)). */
    status: EntityAcquisitionStageSchema,
    transactionStatus: FundraiseTransactionStatusSchema.nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical acquisition event: scoped entity is acquired, acquirerEntity is buyer, and status is read stage -- Acquisition before operating-status change, Acquired Subsidiary for active completed brands, Acquired for terminal/folded/closed (including Closed (Acquihire)).
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