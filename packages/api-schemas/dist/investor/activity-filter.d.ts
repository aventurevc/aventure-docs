import { z } from "zod/v4";
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
export declare const InvestorActivityFilterSchema: z.ZodObject<{
    averageAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
}, z.core.$strip>;
export type InvestorActivityFilter = z.infer<typeof InvestorActivityFilterSchema>;
//# sourceMappingURL=activity-filter.d.ts.map