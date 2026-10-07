import { z } from "zod/v4";
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
    dateAnnouncedRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    investedCompanyName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    investedCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
    investedIndustry: z.ZodOptional<z.ZodArray<z.ZodString>>;
    investedRound: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
    investorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lastRoundYearRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    rankByInvestmentActivity: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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