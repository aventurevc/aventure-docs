// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DomainConflictTypeSchema } from "../domain/conflict-type.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { IdentificationCandidateSchema } from "./candidate.js";
import { JobEnqueueSchema } from "../job/enqueue.js";
import { ProblemResolutionSchema } from "../problem/resolution.js";
import { UrlHostFormResolutionSchema } from "../url/host-form-resolution.js";
/**
 * Which existing entity or person satisfies the requested identity, type, and provider scope, how that was settled, and the candidates considered, most probable first.
 *
 * @openapiSchema Identification
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema LookupJobSchema
 * @contractShape identification.identification
 * @contractRole canonical
 */
export const IdentificationSchema = z.object({
    /** The owner to bind without confirming: a match no language model settled whose record an exact id, URL, slug, or registry id proved, or whose name spells the requested name up to a trailing legal or group form (an Investment Firm also by its bare brand); or created when its name keeps the requested name as whole words. Absent otherwise: confirm the match or created record before binding it. */
    acceptedOwner: EntityPersonOwnerSchema.nullish(),
    /** Records considered, most probable first. */
    candidate: z.array(IdentificationCandidateSchema),
    /** The new record a NO_MATCH subject with a proven own site was added as, or the existing one that already held its website. A new company is public and a new person hidden unless publishCreated says otherwise. Absent otherwise. */
    created: IdentificationCandidateSchema.nullish(),
    /** One sentence naming what settled the answer or what the user must decide. */
    detail: z.string(),
    /** Whether this answer is a deterministic match to the scoped record. Absent on older stored responses; absence is not proof of a deterministic match. */
    deterministicMatch: z.boolean().optional(),
    /** Other records that appear to describe the same subject as match. Empty when none were found. */
    duplicate: z.array(IdentificationCandidateSchema),
    /** Research request filed for the created record; absent without created, when the lookup did not request research on it, and when the record is already public. */
    enrichmentRunId: z.uuid().nullish(),
    /** Present only for callers that sent Prefer: respond-async. The identification is settled, but filing is pending. Poll statusUrl until the lookup job completes and use its identification; do not treat this as a final unfiled absence. */
    filing: JobEnqueueSchema.nullish(),
    /** Conflict kind that refused creating the shell, from ProblemDetail.details.conflictType. Absent when no typed conflict refused filing; detail retains the explanation. */
    filingRefusal: DomainConflictTypeSchema.nullish(),
    /** Reason that pre-insert validation refused filing; present for verified previews as well as filing requests when validation refuses the subject. Absent when validation admits it; a preview never creates a record or claims a source identifier. */
    filingRefusalDetail: z.string().nullish(),
    /** The naming owner's typed correction for a refused verified preview or filing. Absent on older responses or when no correction was supplied; absence never permits a retry. */
    filingResolution: ProblemResolutionSchema.nullish(),
    /** Present only for callers that sent Prefer: respond-async. For a completed filing job, whether that request inserted created. */
    inserted: z.boolean().nullish(),
    /** true when the match was settled on a second, slower review; confirm it before relying on it. Absent otherwise. */
    languageModelSettled: z.boolean().nullish(),
    /** The matched record when status is MATCHED. */
    match: IdentificationCandidateSchema.nullish(),
    /** The subject's own website or profile page found in web search, or a supplied LinkedIn person profile verified against the subject's name and employer for a deterministic match. It may be a profile page on another site rather than the subject's own domain. Only the verified supplied profile may be attached to an existing person matched by name and employer. */
    officialUrl: z.string().nullish(),
    /** What to do next: use the match, record that no match exists in this scope, or add evidence to settle an ambiguous identity. */
    status: z.enum(["MATCHED", "NO_MATCH", "NEEDS_REVIEW"]),
    /** Results of live URL checks the server ran because verifyUrl=true; empty otherwise. */
    urlHostForm: z.array(UrlHostFormResolutionSchema),
});
//# sourceMappingURL=identification.js.map