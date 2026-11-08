// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "../entity/list.js";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { IdentificationSchema } from "../identification/identification.js";
import { PersonSchema } from "../person/person.js";
const LookupJobMentionSchemaDefinition = z.object({
    /** The current titled role, at a company aVenture shows publicly, of the highest-ranked listed person visible to the caller that has one (its personId names whom); null when none does or omitRecords is true. A bulk lookup job reads it on each status read. */
    currentRole: EntityPersonAssociationSchema.nullish(),
    /** Research request filed for this mention, if any. */
    enrichmentRunId: z.uuid().nullish(),
    /** The candidate companies as search results show them, the match first, then by match probability and duplicate-check score; empty when omitRecords is true. */
    entity: z.array(EntityListSchema),
    /** One sentence on why this name could not be identified, if not. */
    failureReason: z.string().nullish(),
    /** The lookup of this name with the source as its context: MATCHED names the stored record, NEEDS_REVIEW lists the candidates, NO_MATCH means none is stored. Absent when failureReason is set. */
    identification: IdentificationSchema.nullish(),
    /** Whether the source names a company, a Product or Service, or a person. */
    mentionType: z.enum(["COMPANY", "PERSON", "PRODUCT_SERVICE"]),
    /** Name as the source writes it. */
    name: z.string(),
    /** The candidate people as search results show them, ranked like entity; empty when omitRecords is true. */
    person: z.array(PersonSchema),
    /** New record aVenture created, at no charge, for a NO_MATCH name whose own live site names it: a company public and a person hidden unless publishCreated says otherwise. enrichmentRunId names research filed for it, if any; to file research yourself, send its entityId to POST /v1/entities/{entityId}/enrichments or its personId to POST /v1/people/{personId}/enrichments. */
    shell: EntityPersonOwnerSchema.nullish(),
    /** Why no new record was created for this NO_MATCH name. */
    shellDetail: z.string().nullish(),
});
/**
 * One company or person a source names, which stored record it is, and, from a standard article job or streaming lookup, the new record created when it is new (a company public and a person hidden unless the lookup's publishCreated says otherwise). Bulk lookup only identifies names and creates no records.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export const LookupJobMentionSchema = LookupJobMentionSchemaDefinition;
//# sourceMappingURL=job-mention.js.map