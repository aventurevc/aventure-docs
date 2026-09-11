import { z } from "zod/v4";
/**
 * Bucket computed from now() to the target date with inclusive boundaries at 0, 3, 6, 12, and 24 months
 *
 * @openapiSchema ResearchDerivedBucket
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema ResearchDerivedRangeSchema
 * @contractShape research.derived-bucket
 * @contractRole canonical
 */
export declare const ResearchDerivedBucketSchema: z.ZodEnum<{
    beyondTwoYears: "beyondTwoYears";
    pastDue: "pastDue";
    sixToTwelveMonths: "sixToTwelveMonths";
    threeToSixMonths: "threeToSixMonths";
    twelveToTwentyFourMonths: "twelveToTwentyFourMonths";
    withinThreeMonths: "withinThreeMonths";
}>;
export type ResearchDerivedBucket = z.infer<typeof ResearchDerivedBucketSchema>;
//# sourceMappingURL=derived-bucket.d.ts.map