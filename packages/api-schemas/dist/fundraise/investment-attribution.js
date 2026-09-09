// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseInvestmentAttributionTypeSchema } from "./investment-attribution-type.js";
import { RoundLabelSchema } from "../round/label.js";
/**
 * Investor-specific attribution for one fundraise participation row
 *
 * @openapiSchema FundraiseInvestmentAttribution
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema PersonInvestmentSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape fundraise.investment-attribution
 * @contractRole canonical
 */
export const FundraiseInvestmentAttributionSchema = z.object({
    /** Investor-level attributed amount invested in the fundraise transaction currency. Serialized as a plain JSON number such as 220000 or 123456.78; no currency sign, currency code, comma grouping, or abbreviated amount text is valid. */
    amountInvested: z.number().nullish(),
    /** How this attribution row participates in the investor view. */
    attributionType: FundraiseInvestmentAttributionTypeSchema,
    /** Investment firm entity receiving the rollup attribution. */
    beneficialEntityId: z.uuid().nullish(),
    /** Fund-manager relationship id when the attribution rolls up through a managed fund. */
    fundManagerRelationshipId: z.int().nullish(),
    /** Fundraise investor join identifier */
    joinId: z.uuid(),
    /** Whether this investor is the lead investor for the round — the lead/anchor investor that set the round terms or made the primary commitment. */
    leadInvestor: z.boolean(),
    /** Entity recorded directly on the fundraise investor join. */
    recordedEntityId: z.uuid().nullish(),
    /** Round label for the attributed participation */
    round: RoundLabelSchema.nullish(),
    /** Fundraise transaction identifier */
    transactionId: z.uuid(),
});
//# sourceMappingURL=investment-attribution.js.map