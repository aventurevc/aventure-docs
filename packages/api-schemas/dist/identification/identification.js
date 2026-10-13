// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { IdentificationCandidateSchema } from "./candidate.js";
/**
 * Which existing entity or person satisfies the requested identity, type, and provider scope, how that was settled, and the candidates considered, most probable first.
 *
 * @openapiSchema Identification
 * @endpoint GET /v1/lookup
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema LookupJobSchema
 * @contractShape identification.identification
 * @contractRole canonical
 */
export const IdentificationSchema = z.object({
    /** Records considered, most probable first. */
    candidate: z.array(IdentificationCandidateSchema),
    /** With fileOnMiss=true, the new record this NO_MATCH created, or the existing one that already held its website. Absent otherwise. */
    created: IdentificationCandidateSchema.nullish(),
    /** One sentence naming what settled the answer or what the user must decide. */
    detail: z.string(),
    /** Other records that appear to describe the same subject as match. Empty when none were found. */
    duplicate: z.array(IdentificationCandidateSchema),
    /** Research request filed for the created record; absent without created, and when the record is already public. */
    enrichmentRunId: z.uuid().nullish(),
    /** true when the match was settled on a second, slower review; confirm it before relying on it. Absent otherwise. */
    languageModelSettled: z.boolean().nullish(),
    /** The matched record when status is MATCHED. */
    match: IdentificationCandidateSchema.nullish(),
    /** The subject's own website or profile page found in web search; it may be a profile page on another site rather than the subject's own domain. */
    officialUrl: z.string().nullish(),
    /** How the answer was settled; informational, so act on status instead. */
    stage: z.enum(["DETERMINISTIC", "JUDGMENT", "WEB_EVIDENCE"]).optional(),
    /** Use the scoped match, record scoped absence, or refine an ambiguous identity with evidence. */
    status: z.enum(["MATCHED", "NO_MATCH", "NEEDS_REVIEW"]),
});
//# sourceMappingURL=identification.js.map