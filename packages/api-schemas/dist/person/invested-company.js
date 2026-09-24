// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
const PersonInvestedCompanySchemaDefinition = z.object({
    entity: EntitySchema,
});
/**
 * Company metadata associated with a person investment
 *
 * @openapiSchema PersonInvestedCompany
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @usedBySchema PersonInvestmentSchema
 * @contractShape person.invested-company
 * @contractRole canonical
 */
export const PersonInvestedCompanySchema = PersonInvestedCompanySchemaDefinition;
//# sourceMappingURL=invested-company.js.map