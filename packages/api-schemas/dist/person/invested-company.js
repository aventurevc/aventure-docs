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
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @usedBySchema PersonInvestmentSchema
 * @contractShape person.invested-company
 * @contractRole canonical
 */
export const PersonInvestedCompanySchema = PersonInvestedCompanySchemaDefinition;
//# sourceMappingURL=invested-company.js.map