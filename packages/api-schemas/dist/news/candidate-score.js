// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const NewsCandidateScoreSchema = z.object({
    /** Matched external article identifier when duplicate scoring used one. */
    externalId: z.string().nullish(),
    /** News article id to read or update when this candidate is the requested article. */
    id: z.int(),
    /** Match reasons for reviewing the candidate. Exact reasons are decision signals regardless of whether score crosses the review threshold. */
    reason: z.array(z.string()),
    /** Ranking score for duplicate review. It is not an absence proof; a low score can still be the intended article when reason/slug/externalId match. */
    score: z.int(),
    /** Candidate article slug from the existing record. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
});
//# sourceMappingURL=candidate-score.js.map