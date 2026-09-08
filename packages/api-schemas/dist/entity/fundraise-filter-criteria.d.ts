import { z } from "zod/v4";
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
export declare const EntityFundraiseFilterCriteriaSchema: z.ZodObject<{
    amountInvestedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    amountRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    investedCompanyName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    investorActivity: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    lastRoundYearRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    round: z.ZodOptional<z.ZodArray<z.ZodString>>;
    totalRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    valuationRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
}, z.core.$strip>;
export type EntityFundraiseFilterCriteria = z.infer<typeof EntityFundraiseFilterCriteriaSchema>;
//# sourceMappingURL=fundraise-filter-criteria.d.ts.map