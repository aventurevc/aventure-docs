// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
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
    /** ISO 4217 currency of totalRaised, latestValuation, and mostRecentAmount: the one currency every round uses, else the entity's own currency when rounds carry none. Null when rounds use more than one currency or no fundraise rollup exists, so these amounts have no single currency. */
    currency: z.string().nullish(),
    /** Recorded round count, including rounds with no recorded amount. */
    fundingRoundCount: z.int(),
    investorCount: z.int(),
    latestValuation: z.number().nullish(),
    mostRecentAmount: z.number().nullish(),
    mostRecentDate: z.iso.date().nullish(),
    stage: FundingStageSchema.nullish(),
    /** Sum of recorded round amounts in their original currencies, excluding rounds with no amount; not a complete lifetime total when amounts are missing. Use totalRaisedUsd for a USD aggregate; totalRaised has no single currency when currency is null. */
    totalRaised: z.number(),
    /** USD aggregate at enrichment.fundingDetail.totalRaisedUsd: sums only recorded round amounts with an announcement-date ECB/World Bank rate. Excludes rounds with no amount or no rate, so do not report it as a complete lifetime total when either is missing. Zero when no round converts; null when no rollup exists. Use instead of totalRaised across currencies; see unconvertedRoundCount for missing rates only. */
    totalRaisedUsd: z.number().nullish(),
    /** Rounds with an amount but no announcement-date USD rate, excluded from totalRaisedUsd. Does not count rounds with no recorded amount; zero does not prove the total is complete. */
    unconvertedRoundCount: z.int(),
});
//# sourceMappingURL=funding-detail.js.map