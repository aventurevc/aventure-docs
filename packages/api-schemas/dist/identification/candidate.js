// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchDuplicateCandidateScoreSchema } from "../search/duplicate-candidate-score.js";
/**
 * One existing record considered as the subject.
 *
 * @openapiSchema IdentificationCandidate
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSchema
 * @contractShape identification.candidate
 * @contractRole canonical
 */
export const IdentificationCandidateSchema = z.object({
    /** Decision-model probability, 0 to 1, that this record is the subject; absent when the answer came from URL proof or the model did not judge this record. */
    probability: z.number().nullish(),
    /** The record with its duplicate-check score and reasons; score 0 with no reason means only vector similarity proposed it. */
    record: SearchDuplicateCandidateScoreSchema,
});
//# sourceMappingURL=candidate.js.map