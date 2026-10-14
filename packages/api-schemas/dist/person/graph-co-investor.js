// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
import { PersonGraphMemberSchema } from "./graph-member.js";
const PersonGraphCoInvestorSchemaDefinition = z.object({
    /** Number of shared fundraise transactions between the two people */
    overlapCount: z.int(),
    /** Co-investing person rail member */
    person: PersonGraphMemberSchema,
    /** Round label of the shared fundraise transaction */
    round: z.string().nullish(),
    /** Entity whose fundraise both people participated in (association projection) */
    sharedEntity: EntitySchema.nullish(),
    /** Shared fundraise transaction id */
    transactionId: z.uuid().nullish(),
});
/**
 * Person who co-invested with the subject, with the shared context
 *
 * @openapiSchema PersonGraphCoInvestor
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
 * @usedBySchema PersonGraphSchema
 * @contractShape person.graph-co-investor
 * @contractRole canonical
 */
export const PersonGraphCoInvestorSchema = PersonGraphCoInvestorSchemaDefinition;
//# sourceMappingURL=graph-co-investor.js.map