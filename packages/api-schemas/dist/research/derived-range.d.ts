import { z } from "zod/v4";
/**
 * Read-only derived range projection for targetDateAbsolute detail rows
 *
 * @openapiSchema ResearchDerivedRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityResearchDetailSchema
 * @contractShape research.derived-range
 * @contractRole canonical
 */
export declare const ResearchDerivedRangeSchema: z.ZodObject<{
    asOfDate: z.ZodISODateTime;
    bucket: z.ZodEnum<{
        beyondTwoYears: "beyondTwoYears";
        pastDue: "pastDue";
        sixToTwelveMonths: "sixToTwelveMonths";
        threeToSixMonths: "threeToSixMonths";
        twelveToTwentyFourMonths: "twelveToTwentyFourMonths";
        withinThreeMonths: "withinThreeMonths";
    }>;
    monthsFromNow: z.ZodInt;
    targetDate: z.ZodISODateTime;
}, z.core.$strip>;
export type ResearchDerivedRange = z.infer<typeof ResearchDerivedRangeSchema>;
//# sourceMappingURL=derived-range.d.ts.map