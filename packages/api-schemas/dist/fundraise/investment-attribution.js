// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseInvestmentAttributionTypeSchema } from "./investment-attribution-type.js";
import { RoundLabelSchema } from "../round/label.js";
/**
 * Investor-specific attribution: an investor's investment in one round (its joins there, one per vehicle, summed) or, in source attribution, one investor join
 *
 * @openapiSchema FundraiseInvestmentAttribution
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema PersonInvestmentSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape fundraise.investment-attribution
 * @contractRole canonical
 */
export const FundraiseInvestmentAttributionSchema = z.object({
    /** Investor-level attributed amount invested in the fundraise transaction currency: the investor's joins on the round summed for an investment, or one join's amount in source attribution. Serialized as a plain JSON number such as 220000 or 123456.78; no currency sign, currency code, comma grouping, or abbreviated amount text is valid. */
    amountInvested: z.number().nullish(),
    /** How this attribution row participates in the investor view. */
    attributionType: FundraiseInvestmentAttributionTypeSchema,
    /** Investment firm entity receiving the rollup attribution. */
    beneficialEntityId: z.uuid().nullish(),
    /** Fund-manager relationship id when the attribution rolls up through a managed fund. */
    fundManagerRelationshipId: z.int().nullish(),
    /** Fundraise investor join identifier; for a summed investment, one of the joins it sums */
    joinId: z.uuid(),
    /** Recorded lead flag. Historical false values may mean non-lead or unrecorded leadership evidence; false alone is not confirmation of a non-lead role. */
    leadInvestor: z.boolean(),
    /** Entity recorded directly on the fundraise investor join. */
    recordedEntityId: z.uuid().nullish(),
    /** Round label for the attributed participation */
    round: RoundLabelSchema.nullish(),
    /** Fundraise transaction identifier */
    transactionId: z.uuid(),
});
//# sourceMappingURL=investment-attribution.js.map