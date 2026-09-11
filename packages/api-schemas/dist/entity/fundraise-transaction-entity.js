// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "./entity.js";
import { EntityFundingDetailSchema } from "./funding-detail.js";
/**
 * Entity projection used inside FundraiseTransaction responses
 *
 * @openapiSchema EntityFundraiseTransactionEntity
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
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
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema EntityListSummarySchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @usedBySchema PersonGraphSimilarEntitySchema
 * @contractShape entity.fundraise-transaction-entity
 * @contractRole canonical
 */
export const EntityFundraiseTransactionEntitySchema = z.object({
    core: EntitySchema,
    fundingDetail: EntityFundingDetailSchema.nullish(),
});
//# sourceMappingURL=fundraise-transaction-entity.js.map