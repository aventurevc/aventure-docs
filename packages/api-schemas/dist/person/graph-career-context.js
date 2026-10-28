// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EmployeeCountSchema } from "../employee/count.js";
import { EntityFundraiseTransactionEntitySchema } from "../entity/fundraise-transaction-entity.js";
import { NewsSchema } from "../news/news.js";
import { PersonGraphMemberSchema } from "./graph-member.js";
import { PersonGraphSimilarEntitySchema } from "./graph-similar-entity.js";
const PersonGraphCareerContextSchemaDefinition = z.object({
    /** People associated with the same entity, excluding the subject person, ranked by currency and recency */
    colleague: z.array(PersonGraphMemberSchema),
    /** Most recent employee-count research fact when one is recorded */
    employeeCount: EmployeeCountSchema.nullish(),
    /** Entity card projection: core identity plus aggregate funding rollup */
    entity: EntityFundraiseTransactionEntitySchema,
    /** Primary address of the entity when one is recorded */
    primaryAddress: AddressSchema.nullish(),
    /** Most recent news linked to the entity, newest first */
    recentNews: z.array(NewsSchema),
    /** Entities similar to this entity, from the entity similarity rails */
    similarEntity: z.array(PersonGraphSimilarEntitySchema),
});
/**
 * Entity facts, recent news, colleagues, and similar entities for one associated entity
 *
 * @openapiSchema PersonGraphCareerContext
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
 * @usedBySchema PersonGraphSchema
 * @contractShape person.graph-career-context
 * @contractRole canonical
 */
export const PersonGraphCareerContextSchema = PersonGraphCareerContextSchemaDefinition;
//# sourceMappingURL=graph-career-context.js.map