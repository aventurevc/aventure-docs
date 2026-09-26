// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { IdentificationSchema } from "../identification/identification.js";
const LookupJobMentionSchemaDefinition = z.object({
    /** One sentence on why this name could not be identified; absent otherwise. */
    failureReason: z.string().nullish(),
    /** The lookup of this name with the article as its source: MATCHED names the stored record, NEEDS_REVIEW lists the candidates, NO_MATCH means none is stored. Absent when failureReason is set. */
    identification: IdentificationSchema.nullish(),
    /** Whether the article names a company or a person. */
    mentionType: z.enum(["COMPANY", "PERSON"]),
    /** Name as the article writes it. */
    name: z.string(),
    /** The hidden record this job created for a NO_MATCH name after the article and one independent live page both showed it exists; enrich it by its entityId or personId. Absent when no record was created. */
    shell: EntityPersonOwnerSchema.nullish(),
    /** One sentence on why no shell was created for a NO_MATCH name, or why a created shell lacks its URL; absent otherwise. */
    shellDetail: z.string().nullish(),
});
/**
 * One company or person the article names, which stored record it is, and the hidden shell record filed for it when it is new.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export const LookupJobMentionSchema = LookupJobMentionSchemaDefinition;
//# sourceMappingURL=job-mention.js.map