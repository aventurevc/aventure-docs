import { z } from "zod/v4";
/**
 * Bucket computed from now() to the target date with inclusive boundaries at 0, 3, 6, 12, and 24 months
 *
 * @openapiSchema ResearchDerivedBucket
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
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