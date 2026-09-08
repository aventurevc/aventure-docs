// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterHeadquartersStateCitySchema } from "./filter-headquarters-state-city.js";
const EntityFilterHeadquartersCountrySchemaDefinition = z.object({
    /** Country name */
    country: z.string(),
    /** States within the country */
    state: z.array(EntityFilterHeadquartersStateCitySchema),
});
/**
 * Country with its states (and optionally cities)
 *
 * @openapiSchema EntityFilterHeadquartersCountry
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterHeadquartersOptionSetSchema
 * @contractShape entity.filter-headquarters-country
 * @contractRole canonical
 */
export const EntityFilterHeadquartersCountrySchema = EntityFilterHeadquartersCountrySchemaDefinition;
//# sourceMappingURL=filter-headquarters-country.js.map