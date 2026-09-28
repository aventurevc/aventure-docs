// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "../entity/list.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { IdentificationSchema } from "../identification/identification.js";
import { PersonSchema } from "../person/person.js";
const LookupJobMentionSchemaDefinition = z.object({
    /** POST /v1/lookup-mentions only: the candidate companies as search results show them, the match first, then by decision-model probability and duplicate-check score. */
    entity: z.array(EntityListSchema),
    /** One sentence on why this name could not be identified; absent otherwise. */
    failureReason: z.string().nullish(),
    /** The lookup of this name with the source as its context: MATCHED names the stored record, NEEDS_REVIEW lists the candidates, NO_MATCH means none is stored. Absent when failureReason is set. */
    identification: IdentificationSchema.nullish(),
    /** Whether the source names a company or a person. */
    mentionType: z.enum(["COMPANY", "PERSON"]),
    /** Name as the source writes it. */
    name: z.string(),
    /** POST /v1/lookup-mentions only: the candidate people as search results show them, ranked like entity. */
    person: z.array(PersonSchema),
    /** The hidden record a lookup job created for a NO_MATCH name after the article and one independent live page both showed it exists; enrich it by its entityId or personId. Absent when no record was created. */
    shell: EntityPersonOwnerSchema.nullish(),
    /** One sentence on why no shell was created for a NO_MATCH name, or why a created shell lacks its URL; absent otherwise. */
    shellDetail: z.string().nullish(),
});
/**
 * One company or person a source names, which stored record it is, and, from a lookup job, the hidden shell record filed for it when it is new.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export const LookupJobMentionSchema = LookupJobMentionSchemaDefinition;
//# sourceMappingURL=job-mention.js.map