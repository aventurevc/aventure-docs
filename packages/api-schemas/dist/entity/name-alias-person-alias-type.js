// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonAliasTypeSchema } from "../person/alias-type.js";
const EntityNameAliasPersonAliasTypeSchemaDefinition = z.object({
    /** Show this alias in public name displays. */
    displayable: z.boolean().nullish(),
    /** Alternate name text */
    name: z.string(),
    /** Alias type classification */
    type: PersonAliasTypeSchema.nullish(),
});
/**
 * Alternate name used for search and display
 *
 * @openapiSchema EntityNameAliasPersonAliasType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.name-alias-person-alias-type
 * @contractRole canonical
 */
export const EntityNameAliasPersonAliasTypeSchema = EntityNameAliasPersonAliasTypeSchemaDefinition;
//# sourceMappingURL=name-alias-person-alias-type.js.map