// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsCandidateScoreSchema } from "../news/candidate-score.js";
import { SearchDuplicateCandidateScoreSchema } from "../search/duplicate-candidate-score.js";
const DuplicateCreateReviewSchemaDefinition = z.object({
    /** Entity/person candidates returned by lookup or create duplicate review. If a candidate is the requested record, read/update that candidate by id. Create with duplicate override only after every candidate is reviewed as distinct. */
    candidate: z.array(SearchDuplicateCandidateScoreSchema).nullish(),
    /** News candidates returned by lookup or create duplicate review. If a candidate is the requested article, read/update that article by id. Otherwise block until source evidence proves a distinct article. */
    newsCandidate: z.array(NewsCandidateScoreSchema).nullish(),
    /** Create endpoint to retry only after reviewing the returned candidates and supplying overrideGate=duplicate and overrideReason as query parameters. Null for detail lookup ambiguity, where the next action is review/update/block. */
    overridePath: z.string().nullish(),
    /** Review threshold used by duplicate scoring. Scores below this value can still be useful candidate context; this value does not prove absence or authorize create. */
    threshold: z.int(),
});
/**
 * Candidate-review conflict details returned in ProblemDetail.details for create gates and deterministic lookup ambiguity. The returned candidates are the decision surface: update the matching candidate, create with duplicate override only when every candidate is distinct from the source-backed target, or block when identity is unresolved. score and threshold rank review priority; they are not proof that the requested record is absent.
 *
 * @openapiSchema DuplicateCreateReview
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape duplicate.create-review
 * @contractRole canonical
 */
export const DuplicateCreateReviewSchema = DuplicateCreateReviewSchemaDefinition;
//# sourceMappingURL=create-review.js.map