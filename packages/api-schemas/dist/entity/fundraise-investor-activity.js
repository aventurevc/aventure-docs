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
    /** Count of participations with a USD-attributed investor-level amount — the coverage denominator behind totalAmountInvestedUsd, averageAmountInvestedUsd, largestAmountInvestedUsd, and smallestAmountInvestedUsd. */
    attributedInvestmentCount: z.int(),
    /** Average investor-level attributed amount per participation, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    averageAmountInvestedUsd: z.number().nullish(),
    currentPortfolioCount: z.int(),
    /** Largest single investor-level attributed amount, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    largestAmountInvestedUsd: z.number().nullish(),
    /** Distinct portfolio companies this investor has participated in, across all portfolio-company statuses. Counts companies, whereas totalInvestment counts distinct fundraise transactions. */
    portfolioCompanyCount: z.int(),
    /** Smallest single investor-level attributed amount, restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    smallestAmountInvestedUsd: z.number().nullish(),
    topInvestmentStage: z.array(StageFrequencySchema),
    /** Sum of investor-level attributed amounts (amount_invested) restricted to rounds whose transaction functional currency is USD. Null when no USD-attributed amounts exist for this investor. */
    totalAmountInvestedUsd: z.number().nullish(),
    totalInvestment: z.int(),
    totalPortfolioExit: z.int(),
    totalWriteOff: z.int(),
});
//# sourceMappingURL=fundraise-investor-activity.js.map