// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { StageFrequencySchema } from "../stage/frequency.js";
const EntityFundraiseInvestorActivitySchemaDefinition = z.object({
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
/**
 * Investor-perspective activity aggregate for entity and person investors.
 *
 * @openapiSchema EntityFundraiseInvestorActivity
 * @endpoint GET /v1/entities/detail/investor-activity
 * @endpoint GET /v1/people/detail/investor-activity
 * @contractShape entity.fundraise-investor-activity
 * @contractRole canonical
 */
export const EntityFundraiseInvestorActivitySchema = EntityFundraiseInvestorActivitySchemaDefinition;
//# sourceMappingURL=fundraise-investor-activity.js.map