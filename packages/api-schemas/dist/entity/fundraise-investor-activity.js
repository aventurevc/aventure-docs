// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { StageFrequencySchema } from "../stage/frequency.js";
/**
 * Investor-perspective activity aggregate for entity and person investors.
 *
 * @openapiSchema EntityFundraiseInvestorActivity
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonDetailSchema
 * @contractShape entity.fundraise-investor-activity
 * @contractRole canonical
 */
export const EntityFundraiseInvestorActivitySchema = z.object({
    /** Distinct recorded recipients currently Acquired or Acquired Subsidiary; not investor exits. Null until the status breakdown has been calculated. */
    acquiredRecipientCount: z.int().nullish(),
    /** Count of participations with a USD-attributed investor-level amount — the coverage denominator behind totalAmountInvestedUsd, averageAmountInvestedUsd, largestAmountInvestedUsd, and smallestAmountInvestedUsd. */
    attributedInvestmentCount: z.int(),
    /** Average investor-level attributed amount per participation, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    averageAmountInvestedUsd: z.number().nullish(),
    /** Distinct recorded recipients currently Closed, Closed (Acquihire), or Inactive; not investor write-offs. Null until the status breakdown has been calculated. */
    closedRecipientCount: z.int().nullish(),
    /** Legacy Operating-status recipient count, including public recipients; not current holdings. Use operatingRecipientCount. */
    currentPortfolioCount: z.int(),
    /** Largest single investor-level attributed amount, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    largestAmountInvestedUsd: z.number().nullish(),
    /** Distinct recorded recipients currently Operating, excluding the public bucket; not current holdings. Null until the status breakdown has been calculated. */
    operatingRecipientCount: z.int().nullish(),
    /** Distinct portfolio companies this investor has participated in, across all portfolio-company statuses. Counts companies, whereas totalInvestment counts distinct fundraise transactions. */
    portfolioCompanyCount: z.int(),
    /** Distinct recorded recipients with current unconflicted Public ownership, or legacy Public status, excluding acquired/closed recipients; not exits. Unknown statuses are not inferred from funding. Null until the status breakdown has been calculated. */
    publicRecipientCount: z.int().nullish(),
    /** Smallest single investor-level attributed amount, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    smallestAmountInvestedUsd: z.number().nullish(),
    topInvestmentStage: z.array(StageFrequencySchema),
    /** Sum of investor-level attributed amounts (amount_invested) restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    totalAmountInvestedUsd: z.number().nullish(),
    /** Recorded round participations, including acquisitions and grants; not holdings. */
    totalInvestment: z.int(),
    /** Legacy acquired-status recipient count; not investor exits. Use acquiredRecipientCount. */
    totalPortfolioExit: z.int(),
    /** Legacy closed-status recipient count; not investor write-offs. Use closedRecipientCount. */
    totalWriteOff: z.int(),
});
//# sourceMappingURL=fundraise-investor-activity.js.map