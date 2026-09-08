// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DecimalRangeSchema } from "../decimal/range.js";
import { IntRangeSchema } from "../int/range.js";
/**
 * Aggregate investor activity filters from distinct fundraise deals and USD amounts.
 *
 * @openapiSchema InvestorActivityFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @usedBySchema PersonFilterSchema
 * @contractShape investor.activity-filter
 * @contractRole canonical
 */
export const InvestorActivityFilterSchema = z.object({
    averageAmountInvestedUsdRange: z.array(DecimalRangeSchema).optional(),
    largestAmountInvestedUsdRange: z.array(DecimalRangeSchema).optional(),
    smallestAmountInvestedUsdRange: z.array(DecimalRangeSchema).optional(),
    totalAmountInvestedUsdRange: z.array(DecimalRangeSchema).optional(),
    totalInvestmentRange: z.array(IntRangeSchema).optional(),
});
//# sourceMappingURL=activity-filter.js.map