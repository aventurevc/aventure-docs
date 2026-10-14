// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonImageSchema } from "./image.js";
const PersonGraphMemberSchemaDefinition = z.object({
    isCurrent: z.boolean().nullish(),
    /** Associated person id */
    personId: z.uuid(),
    /** Person image projection */
    personImage: PersonImageSchema,
    /** Person display name */
    personName: z.string(),
    /** Canonical lowercase URL slug for the resource */
    personSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Read-side corporate title text for the association row */
    titleName: z.string().nullish(),
});
/**
 * Lean person rail member with association title facts
 *
 * @openapiSchema PersonGraphMember
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonGraphCareerContextSchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonGraphSimilarEntitySchema
 * @contractShape person.graph-member
 * @contractRole canonical
 */
export const PersonGraphMemberSchema = PersonGraphMemberSchemaDefinition;
//# sourceMappingURL=graph-member.js.map