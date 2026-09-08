// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundingStageSchema } from "../funding/stage.js";
/**
 * Aggregate view of an entity's fundraising activity
 *
 * @openapiSchema EntityFundingDetail
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @contractShape entity.funding-detail
 * @contractRole canonical
 */
export const EntityFundingDetailSchema = z.object({
    fundingRoundCount: z.int(),
    investorCount: z.int(),
    latestValuation: z.number().nullish(),
    mostRecentAmount: z.number().nullish(),
    mostRecentDate: z.iso.date().nullish(),
    stage: FundingStageSchema.nullish(),
    totalRaised: z.number(),
});
//# sourceMappingURL=funding-detail.js.map