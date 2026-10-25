// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DateRangeSchema } from "../date/range.js";
import { DecimalRangeSchema } from "../decimal/range.js";
import { IntRangeSchema } from "../int/range.js";
import { InvestorActivityFilterSchema } from "../investor/activity-filter.js";
import { InvestorNameMatchModeSchema } from "../investor/name-match-mode.js";
/**
 * Fundraise and investment filters for entity search
 *
 * @openapiSchema EntityFundraiseFilterCriteria
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.fundraise-filter-criteria
 * @contractRole canonical
 */
export const EntityFundraiseFilterCriteriaSchema = z.object({
    /** Investor-level check amounts in the transaction currency, not the round's total raise. Use investedAmountRaisedRange for a named portfolio company's round total. Use plain JSON numbers. */
    amountInvestedRange: z.array(DecimalRangeSchema).optional(),
    /** Per-round amounts raised by the returned entity itself in USD, not a portfolio company's round total. Use investedAmountRaisedRange for the latter. Use plain JSON numbers. */
    amountRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Inclusive announcement timestamp bounds on the same fundraise transaction as round and amountRaisedRange. Announcement dates do not establish funding completion dates. */
    dateAnnouncedRange: DateRangeSchema.nullish(),
    /** Total amounts raised in USD by a named portfolio company's rounds, not an investor's individual check or its own fundraising. Requires nonblank investedCompanyName. Company, investedRound, and this amount match the same portfolio-company transaction. */
    investedAmountRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Portfolio company names matched by brand, legal name, or canonical identity; returns their investors with investedRound, when supplied, bound to the same company transaction regardless of its age. */
    investedCompanyName: z.array(z.string()).optional(),
    /** Countries of the companies an investor backed, as country names or ids; a deal matches when its company's current headquarters is in one of them. Restricts returned entities to investors with such a deal inside the investment-activity horizon; the same deal must match investedIndustry and, when investedCompanyName is empty, investedRound. */
    investedCountry: z.array(z.string()).optional(),
    /** Industry terms for the companies an investor backed, such as Software, Artificial Intelligence, or Fintech; a term matches a portfolio company whose industry or industry classification name contains it as whole words, case-insensitively. Restricts returned entities to investors with such a deal inside the investment-activity horizon; with investedRound and no investedCompanyName, the same deal must match both. */
    investedIndustry: z.array(z.string()).optional(),
    /** Round labels of deals an investor joined, such as Seed or Series A; with investedCompanyName matches those companies' transactions regardless of age, otherwise matches deals inside the investment-activity horizon. */
    investedRound: z.array(z.string()).optional(),
    /** Aggregate investor activity filters. */
    investorActivity: InvestorActivityFilterSchema.optional(),
    /** Investor names. Each matches an investor entity whose brand, legal name, or alias equals it ignoring case and punctuation, or an individual investor's exact full name; a name that begins public entities' brands as whole words ("Sequoia") also matches the one holding many times the recorded investments of every other such entity (Sequoia Capital). Restricts returned entities to companies with a fundraise that investor joined. */
    investorName: z.array(z.string()).optional(),
    /** How investorName names combine: any (default) returns companies one named investor backed; every returns companies every named investor backed, each in any of the company's fundraises. */
    investorNameMatch: InvestorNameMatchModeSchema.nullish(),
    /** Last-round-year ranges for each entity's most recent fundraise round. */
    lastRoundYearRange: z.array(IntRangeSchema).optional(),
    /** True ranks returned investors by recent deal activity ahead of any sort: each deal matching investedIndustry, investedCountry, and (when investedCompanyName is empty) investedRound adds a weight that decays to zero over the investment-activity horizon, nudged by the investor's known USD check. Restricts returned entities to investors with such a deal. */
    rankByInvestmentActivity: z.boolean().nullish(),
    /** Fundraise round labels, such as Seed or Series A. */
    round: z.array(z.string()).optional(),
    /** Total-raised ranges across all rounds in USD. Use plain JSON numbers. */
    totalRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Post-money valuation ranges in USD. */
    valuationRange: z.array(DecimalRangeSchema).optional(),
});
//# sourceMappingURL=fundraise-filter-criteria.js.map