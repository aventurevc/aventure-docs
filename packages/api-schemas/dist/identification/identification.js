// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { IdentificationCandidateSchema } from "./candidate.js";
/**
 * Which existing company or person record a subject is, how that was settled, and the candidates considered, most probable first.
 *
 * @openapiSchema Identification
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @usedBySchema LookupJobMentionSchema
 * @contractShape identification.identification
 * @contractRole canonical
 */
export const IdentificationSchema = z.object({
    /** Records considered, most probable first. */
    candidate: z.array(IdentificationCandidateSchema),
    /** One sentence naming what settled the answer or what the user must decide. */
    detail: z.string(),
    /** Other stored records judged to be this same subject stored again: likely duplicate records to merge into match. Empty when none were found. */
    duplicate: z.array(IdentificationCandidateSchema),
    /** The matched record when status is MATCHED. */
    match: IdentificationCandidateSchema.nullish(),
    /** Decision-model confidence, 0 to 1, in its pick: the candidate it named as the subject, or, when it picked none, that no candidate is. Present whenever a judgment ran, including a none pick; absent when no judgment ran. The kind-agnostic lookup reports the side whose answer it returns. */
    matchConfidence: z.number().nullish(),
    /** Decision-model probability, 0 to 1, that the evidence can tell the subject apart from namesakes. Absent when no judgment ran. The kind-agnostic lookup reports the side whose answer it returns. */
    matchEvidenceProbability: z.number().nullish(),
    /** The subject's own website or profile page found in web search. Use it as the website when creating the record only if it is the subject's own domain, not a LinkedIn, Crunchbase, or other profile page. */
    officialUrl: z.string().nullish(),
    /** The ladder step that settled the answer. */
    stage: z.enum(["DETERMINISTIC", "JUDGMENT", "WEB_EVIDENCE"]),
    /** What the caller does next: act on match, create, or ask the user. */
    status: z.enum(["MATCHED", "NO_MATCH", "NEEDS_REVIEW"]),
});
//# sourceMappingURL=identification.js.map