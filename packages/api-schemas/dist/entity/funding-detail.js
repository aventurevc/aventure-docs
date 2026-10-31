// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationSchema } from "./valuation.js";
import { FundingApplicabilitySchema } from "../funding/applicability.js";
import { FundingStageSchema } from "../funding/stage.js";
/**
 * Aggregate view of an entity's fundraising activity
 *
 * @openapiSchema EntityFundingDetail
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
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
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
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @usedBySchema EntitySimilaritySummarySchema
 * @contractShape entity.funding-detail
 * @contractRole canonical
 */
export const EntityFundingDetailSchema = z.object({
    /** RECORDED when an eligible financing amount, including an explicit zero, exists. Otherwise UNKNOWN for a company, investment firm, or unestablished kind; NOT_APPLICABLE for a fund, nonprofit, government, business line, product, or service with no recorded financing amount. Recorded financing history is preserved for every kind. Null or absent means this contract was not supplied, not that financing is unknown. totalRaised retains its legacy numeric type. */
    applicability: FundingApplicabilitySchema.nullish(),
    /** ISO 4217 currency of totalRaised, latestValuation, and mostRecentAmount: the one currency every round uses, else the entity's own currency when rounds carry none. Null when rounds use more than one currency or no fundraise rollup exists, so these amounts have no single currency. */
    currency: z.string().nullish(),
    /** Selected eligible valuation with its own currency/basis/date, including standalone research evidence. Optional on older servers; absence is not zero. */
    currentValuation: EntityValuationSchema.nullish(),
    /** Latest explicitly recorded equity ladder label retained in a transaction's source round field, not calculatedRoundLabel or a Late Stage Private inference. Null when no canonical disclosed ladder label is recorded; does not assert market standing. */
    disclosedStage: z.string().nullish(),
    /** Transaction retaining disclosedStage; read its history/source, not a current listing assertion. */
    disclosedStageTransactionId: z.uuid().nullish(),
    /** Recorded round count, including rounds with no recorded amount. */
    fundingRoundCount: z.int(),
    investorCount: z.int(),
    /** Legacy latest-transaction valuation; not a current observation or USD value. Use currentValuation. */
    latestValuation: z.number().nullish(),
    mostRecentAmount: z.number().nullish(),
    mostRecentDate: z.iso.date().nullish(),
    stage: FundingStageSchema.nullish(),
    /** Sum of recorded round amounts in their original currencies, excluding rounds with no amount; not a complete lifetime total when amounts are missing. Use totalRaisedUsd for a USD aggregate; totalRaised has no single currency when currency is null. Legacy numeric projection: zero also represents unknown or inapplicable financing; read applicability before displaying it. This field remains numeric until all supported readers accept nullable totals. */
    totalRaised: z.number(),
    /** Eligible totalRaisedUsd rounds with a recorded amount, including an explicit zero. Subtract from totalRaisedRoundCount for undisclosed amounts. Null means unknown coverage. */
    totalRaisedAmountRoundCount: z.int().nullish(),
    /** Deduplicated rounds eligible for totalRaisedUsd, including undisclosed amounts. Uses exactly that total's acquisition/bankruptcy exclusions; unlike fundingRoundCount, this is the coverage denominator. Null until coverage is available. */
    totalRaisedRoundCount: z.int().nullish(),
    /** USD aggregate at enrichment.fundingDetail.totalRaisedUsd: sums only recorded round amounts with an announcement-date ECB/World Bank rate. Excludes rounds with no amount or no rate, so do not report it as a complete lifetime total when either is missing. Null when no eligible amount converts or coverage is not available; a converted recorded zero remains zero. Use totalRaisedRoundCount, totalRaisedAmountRoundCount and totalRaisedUsdRoundCount for coverage of this same deduplicated eligible set, never fundingRoundCount as its denominator. */
    totalRaisedUsd: z.number().nullish(),
    /** Eligible totalRaisedUsd rounds whose recorded amount has a USD conversion, including converted zero. Subtract from totalRaisedAmountRoundCount for missing FX. Null means unknown coverage; zero means no converted amount is known. */
    totalRaisedUsdRoundCount: z.int().nullish(),
    /** Rounds with an amount but no announcement-date USD rate, excluded from totalRaisedUsd. Does not count rounds with no recorded amount; zero does not prove the total is complete. */
    unconvertedRoundCount: z.int(),
});
//# sourceMappingURL=funding-detail.js.map