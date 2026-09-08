import { z } from "zod/v4";
/**
 * Duplicate candidate scoring result for news articles. Use id/slug/externalId/reason to decide whether the candidate is the requested article. score ranks review priority; it does not prove absence.
 *
 * @openapiSchema NewsCandidateScore
 * @standardProblemResponse
 * @usedBySchema DuplicateCreateReviewSchema
 * @contractShape news.candidate-score
 * @contractRole canonical
 */
export declare const NewsCandidateScoreSchema: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodInt;
    reason: z.ZodArray<z.ZodString>;
    score: z.ZodInt;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type NewsCandidateScore = z.infer<typeof NewsCandidateScoreSchema>;
//# sourceMappingURL=candidate-score.d.ts.map