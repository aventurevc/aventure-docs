// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFilterHeadquartersStateCitySchemaDefinition = z.object({
    /** Cities within the state; empty when only states were requested */
    city: z.array(z.string()),
    /** State name */
    state: z.string(),
});
/**
 * City within a state
 *
 * @openapiSchema EntityFilterHeadquartersStateCity
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterHeadquartersCountrySchema
 * @contractShape entity.filter-headquarters-state-city
 * @contractRole canonical
 */
export const EntityFilterHeadquartersStateCitySchema = EntityFilterHeadquartersStateCitySchemaDefinition;
//# sourceMappingURL=filter-headquarters-state-city.js.map