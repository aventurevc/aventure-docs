// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterHeadquartersCountrySchema } from "./filter-headquarters-country.js";
/**
 * Headquarters option hierarchy
 *
 * @openapiSchema EntityFilterHeadquartersOptionSet
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterUiMetaSchema
 * @contractShape entity.filter-headquarters-option-set
 * @contractRole canonical
 */
export const EntityFilterHeadquartersOptionSetSchema = z.object({
    /** Countries with their states and cities */
    country: z.array(EntityFilterHeadquartersCountrySchema),
});
//# sourceMappingURL=filter-headquarters-option-set.js.map