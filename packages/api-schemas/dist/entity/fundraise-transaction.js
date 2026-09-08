// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFundraiseTransactionEntitySchema } from "./fundraise-transaction-entity.js";
import { FundraiseDataConfidenceSchema } from "../fundraise/data-confidence.js";
import { FundraiseInvestmentAttributionSchema } from "../fundraise/investment-attribution.js";
const EntityFundraiseTransactionSchemaDefinition = z.object({
    amountRaised: z.number().int().nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    currency: z.string().nullish(),
    /** Data confidence level */
    dataConfidence: FundraiseDataConfidenceSchema.nullish(),
    dateAnnounced: z.iso.datetime({ offset: true }).nullish(),
    dateFundingComplete: z.iso.datetime({ offset: true }).nullish(),
    dateInvestorExit: z.iso.datetime({ offset: true }).nullish(),
    entity: EntityFundraiseTransactionEntitySchema.nullish(),
    /** Canonical fundraise transaction UUID */
    id: z.uuid(),
    /** Investor-specific attribution when returned from investor-perspective investment views. amountInvested is not added to amountRaised; it is the selected investor's attributed participation amount for this round. */
    investorAttribution: FundraiseInvestmentAttributionSchema.nullish(),
    /** Source-reported number of investors in the round. This can exceed the identified investor joins when a source reports a total without naming every investor. */
    investorCount: z.int().nullish(),
    round: z.string().nullish(),
    sourceAttribution: z.array(FundraiseInvestmentAttributionSchema),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    valuationPostMoney: z.number().int().nullish(),
    valuationPreMoney: z.number().int().nullish(),
});
/**
 * Canonical fundraise transaction view. ONE row per discrete round. An entity that raised pre-seed, seed, and Series A is THREE rows. Combined or rolled-up totals are never modeled here — total raised is a sum across rows.
 *
 * @openapiSchema EntityFundraiseTransaction
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
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @usedBySchema EntityListSummarySchema
 * @usedBySchema PageEntityFundraiseTransactionSchema
 * @contractShape entity.fundraise-transaction
 * @contractRole canonical
 */
export const EntityFundraiseTransactionSchema = EntityFundraiseTransactionSchemaDefinition;
//# sourceMappingURL=fundraise-transaction.js.map