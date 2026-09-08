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
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.fundraise-filter-criteria
 * @contractRole canonical
 */
export const EntityFundraiseFilterCriteriaSchema = z.object({
    amountInvestedRange: z.array(DecimalRangeSchema).optional(),
    amountRaisedRange: z.array(DecimalRangeSchema).optional(),
    /** Portfolio company names. Exact, case-sensitive match on the portfolio company's brand or legal name; restricts returned entities to investors in those companies. */
    investedCompanyName: z.array(z.string()).optional(),
    /** Aggregate investor activity filters. */
    investorActivity: InvestorActivityFilterSchema.optional(),
    lastRoundYearRange: z.array(IntRangeSchema).optional(),
    /** Fundraise round labels, such as Seed or Series A. */
    round: z.array(z.string()).optional(),
    totalRaisedRange: z.array(DecimalRangeSchema).optional(),
    valuationRange: z.array(DecimalRangeSchema).optional(),
});
//# sourceMappingURL=fundraise-filter-criteria.js.map