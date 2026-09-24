// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { IdentificationCandidateSchema } from "./candidate.js";
const IdentificationSchemaDefinition = z.object({
    /** Records considered, most probable first. */
    candidate: z.array(IdentificationCandidateSchema),
    /** One sentence naming what settled the answer or what the user must decide. */
    detail: z.string(),
    /** The matched record when status is MATCHED. */
    match: IdentificationCandidateSchema.nullish(),
    /** The subject's own website or profile page found in web search. Use it as the website when creating the record only if it is the subject's own domain, not a LinkedIn, Crunchbase, or other profile page. */
    officialUrl: z.string().nullish(),
    /** The ladder step that settled the answer. */
    stage: z.enum(["DETERMINISTIC", "JUDGMENT", "WEB_EVIDENCE"]),
    /** What the caller does next: act on match, create, or ask the user. */
    status: z.enum(["MATCHED", "NO_MATCH", "NEEDS_REVIEW"]),
});
/**
 * Which existing company or person record a subject is, how that was settled, and the candidates considered, most probable first.
 *
 * @openapiSchema Identification
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.identification
 * @contractRole canonical
 */
export const IdentificationSchema = IdentificationSchemaDefinition;
//# sourceMappingURL=identification.js.map