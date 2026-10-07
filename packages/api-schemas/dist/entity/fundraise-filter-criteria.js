// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DecimalRangeSchema } from "../decimal/range.js";
import { IntRangeSchema } from "../int/range.js";
import { InvestorActivityFilterSchema } from "../investor/activity-filter.js";
/**
 * Fundraise and investment filters for entity search
 *
 * @openapiSchema EntityFundraiseFilterCriteria
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.fundraise-filter-criteria
 * @contractRole canonical
 */
export const EntityFundraiseFilterCriteriaSchema = z.object({
    /** Investor-level amount-invested ranges in the transaction currency. Use plain JSON numbers. */
    amountInvestedRange: z.array(DecimalRangeSchema).optional(),
    /** Per-round amount-raised ranges in USD. Use plain JSON numbers. */
    amountRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Portfolio company names. Exact, case-sensitive match on the portfolio company's brand or legal name; restricts returned entities to investors in those companies. */
    investedCompanyName: z.array(z.string()).optional(),
    /** Countries of the companies an investor backed, as country names or ids; a deal matches when its company's current headquarters is in one of them. Restricts returned entities to investors with such a deal inside the investment-activity horizon; with investedRound or investedIndustry, the same deal must match each. */
    investedCountry: z.array(z.string()).optional(),
    /** Industry terms for the companies an investor backed, such as Software, Artificial Intelligence, or Fintech; a term matches a portfolio company whose industry or industry classification name contains it as whole words, case-insensitively. Restricts returned entities to investors with such a deal inside the investment-activity horizon; with investedRound, the same deal must match both. */
    investedIndustry: z.array(z.string()).optional(),
    /** Round labels of the deals an investor joined, such as Seed, Pre-Seed, or Series A; restricts returned entities to investors with such a deal inside the investment-activity horizon. */
    investedRound: z.array(z.string()).optional(),
    /** Aggregate investor activity filters. */
    investorActivity: InvestorActivityFilterSchema.optional(),
    /** Investor names. Exact, case-sensitive match on an investor entity's brand or legal name or an individual investor's full name; restricts returned entities to companies with a fundraise that investor joined. */
    investorName: z.array(z.string()).optional(),
    /** Last-round-year ranges for each entity's most recent fundraise round. */
    lastRoundYearRange: z.array(IntRangeSchema).optional(),
    /** True ranks returned investors by recent deal activity ahead of any sort: each deal inside investedRound, investedIndustry, and investedCountry (every deal when all are empty) adds a weight that decays to zero over the investment-activity horizon, nudged by the investor's known USD check. Restricts returned entities to investors with such a deal. */
    rankByInvestmentActivity: z.boolean().nullish(),
    /** Fundraise round labels, such as Seed or Series A. */
    round: z.array(z.string()).optional(),
    /** Total-raised ranges across all rounds in USD. Use plain JSON numbers. */
    totalRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Post-money valuation ranges in USD. */
    valuationRange: z.array(DecimalRangeSchema).optional(),
});
//# sourceMappingURL=fundraise-filter-criteria.js.map