// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "./entity.js";
import { EntityProfileStatusSchema } from "./profile-status.js";
import { FundingStageSchema } from "../funding/stage.js";
/**
 * Competitive comparison signals for a provider entity — sells-to customers, pricing model, ownership, funding stage, total raised, and website. Taken from the entity's additional data for side-by-side comparison; the founding year is in the entity's core fields.
 *
 * @openapiSchema EntityComparisonSignals
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityRelationshipSchema
 * @contractShape entity.comparison-signals
 * @contractRole canonical
 */
export const EntityComparisonSignalsSchema = z.object({
    /** Public buyer of the newest completed acquisition; null for announced or non-public buyers. */
    acquirer: EntitySchema.nullish(),
    /** Disclosed equity ladder label from fundingDetail.disclosedStage; financing history, not the provider operating status or current market standing. */
    disclosedStage: z.string().nullish(),
    /** Latest funding stage when known */
    fundingStage: FundingStageSchema.nullish(),
    /** Provider ownership from current tags and current primary parent or acquirer relationships */
    ownership: z.array(z.string()),
    /** Provider pricing/revenue model (current typeRevenue tags) */
    pricingModel: z.array(z.string()),
    /** Derived profile status of the provider */
    profileStatus: EntityProfileStatusSchema.optional(),
    /** Customer types the provider sells to (current typeCustomer tags) */
    sellsTo: z.array(z.string()),
    /** Total capital raised in USD, each round converted at its announcement-date rate; null when no round converts to USD or no funding is known */
    totalRaised: z.number().nullish(),
    /** Provider website URL when known */
    website: z.string().nullish(),
});
//# sourceMappingURL=comparison-signals.js.map