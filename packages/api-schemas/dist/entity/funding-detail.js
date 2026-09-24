// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundingStageSchema } from "../funding/stage.js";
/**
 * Aggregate view of an entity's fundraising activity
 *
 * @openapiSchema EntityFundingDetail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @contractShape entity.funding-detail
 * @contractRole canonical
 */
export const EntityFundingDetailSchema = z.object({
    /** ISO 4217 currency of totalRaised, latestValuation, and mostRecentAmount: the one currency every round uses, else the entity's own currency when rounds carry none. Null when rounds use more than one currency or no fundraise rollup exists, so these amounts have no single currency. */
    currency: z.string().nullish(),
    fundingRoundCount: z.int(),
    investorCount: z.int(),
    latestValuation: z.number().nullish(),
    mostRecentAmount: z.number().nullish(),
    mostRecentDate: z.iso.date().nullish(),
    stage: FundingStageSchema.nullish(),
    totalRaised: z.number(),
});
//# sourceMappingURL=funding-detail.js.map