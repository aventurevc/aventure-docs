// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "../entity/list.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { IdentificationSchema } from "../identification/identification.js";
import { PersonSchema } from "../person/person.js";
const LookupJobMentionSchemaDefinition = z.object({
    /** Research request filed for this mention, if any. */
    enrichmentRunId: z.uuid().nullish(),
    /** POST /v1/lookup-mentions only: the candidate companies as search results show them, the match first, then by match probability and duplicate-check score. */
    entity: z.array(EntityListSchema),
    /** One sentence on why this name could not be identified; absent otherwise. */
    failureReason: z.string().nullish(),
    /** The lookup of this name with the source as its context: MATCHED names the stored record, NEEDS_REVIEW lists the candidates, NO_MATCH means none is stored. Absent when failureReason is set. */
    identification: IdentificationSchema.nullish(),
    /** Whether the source names a company, a Product or Service, or a person. */
    mentionType: z.enum(["COMPANY", "PERSON", "PRODUCT_SERVICE"]),
    /** Name as the source writes it. */
    name: z.string(),
    /** POST /v1/lookup-mentions only: the candidate people as search results show them, ranked like entity. */
    person: z.array(PersonSchema),
    /** New unpublished record aVenture created for a NO_MATCH name that the article and another live page both name. enrichmentRunId names the research already filed for it; to file research yourself, send its entityId to POST /v1/entities/{entityId}/enrichments or its personId to POST /v1/people/{personId}/enrichments. */
    shell: EntityPersonOwnerSchema.nullish(),
    /** Why no new record was created for this NO_MATCH name. */
    shellDetail: z.string().nullish(),
});
/**
 * One company or person a source names, which stored record it is, and, from a standard article job or streaming lookup, the new unpublished record created when it is new. Bulk lookup only identifies names and creates no records.
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