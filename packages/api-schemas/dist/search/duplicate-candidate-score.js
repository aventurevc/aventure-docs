// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
const SearchDuplicateCandidateScoreSchemaDefinition = z.object({
    /** Matched external identifier when duplicate scoring used one. */
    externalId: z.string().nullish(),
    /** Candidate id to read or update when this candidate is the requested record. */
    id: z.uuid(),
    /** Candidate display name from the existing record. */
    name: z.string().nullish(),
    /** Current operating status for entity candidates. */
    operatingStatus: z.string().nullish(),
    /** Public API/UI path for the candidate when available. */
    publicPath: z.string().nullish(),
    /** Match reasons such as name-exact, slug-exact, url-match, url-type, or precomputed-similarity. url-match proves the supplied URL/domain matched; url-type only means the candidate has the same URL category and is review context, not URL identity evidence. */
    reason: z.array(z.string()),
    /** Ranking score for duplicate review. It is not an absence proof; a low score can still be the intended record when reason/name/slug/typeRecord match. */
    score: z.int(),
    /** Candidate slug from the existing record. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    /** Candidate entity type from the existing record. */
    typeRecord: EntityTypeSchema.nullish(),
});
/**
 * Duplicate candidate scoring result. Use id/name/slug/typeRecord/reason to decide whether the candidate is the requested record. score ranks review priority; it does not prove absence.
 *
 * @openapiSchema SearchDuplicateCandidateScore
 * @standardProblemResponse
 * @usedBySchema DuplicateCreateReviewSchema
 * @contractShape search.duplicate-candidate-score
 * @contractRole canonical
 */
export const SearchDuplicateCandidateScoreSchema = SearchDuplicateCandidateScoreSchemaDefinition;
//# sourceMappingURL=duplicate-candidate-score.js.map