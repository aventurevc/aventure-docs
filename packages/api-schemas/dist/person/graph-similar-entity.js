// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFundraiseTransactionEntitySchema } from "../entity/fundraise-transaction-entity.js";
import { PersonGraphMemberSchema } from "./graph-member.js";
const PersonGraphSimilarEntitySchemaDefinition = z.object({
    /** Entity card projection: core identity plus aggregate funding rollup */
    entity: EntityFundraiseTransactionEntitySchema,
    /** Top-ranked current people at the similar entity */
    keyPerson: z.array(PersonGraphMemberSchema),
});
/**
 * Similar-entity card with its key people
 *
 * @openapiSchema PersonGraphSimilarEntity
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
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
 * @contractShape person.graph-similar-entity
 * @contractRole canonical
 */
export const PersonGraphSimilarEntitySchema = PersonGraphSimilarEntitySchemaDefinition;
//# sourceMappingURL=graph-similar-entity.js.map