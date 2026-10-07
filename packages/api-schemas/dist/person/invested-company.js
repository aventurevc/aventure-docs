// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
const PersonInvestedCompanySchemaDefinition = z.object({
    entity: EntitySchema,
    /** Headquarters city of the investee at read time, when known */
    headquartersCity: z.string().nullish(),
    /** Headquarters country of the investee, when known */
    headquartersCountry: z.string().nullish(),
    /** Headquarters region (state or province) of the investee, when known */
    headquartersRegion: z.string().nullish(),
    /** Primary industry classification of the investee, when known */
    industry: z.string().nullish(),
});
/**
 * Company metadata associated with a person investment
 *
 * @openapiSchema PersonInvestedCompany
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonInvestmentSchema
 * @contractShape person.invested-company
 * @contractRole canonical
 */
export const PersonInvestedCompanySchema = PersonInvestedCompanySchemaDefinition;
//# sourceMappingURL=invested-company.js.map