// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LocationScopeSchema } from "./scope.js";
const LocationIdentifierSchemaDefinition = z.object({
    cityId: z.int().nullish(),
    cityName: z.string().nullish(),
    countryId: z.int().nullish(),
    countryIso2: z.string().nullish(),
    countryName: z.string().nullish(),
    scope: LocationScopeSchema,
    stateAbbrev: z.string().nullish(),
    stateId: z.int().nullish(),
    stateName: z.string().nullish(),
});
/**
 * Canonical multi-scope location identifier with hierarchical IDs
 *
 * @openapiSchema LocationIdentifier
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationDirectoryEntrySchema
 * @contractShape location.identifier
 * @contractRole canonical
 */
export const LocationIdentifierSchema = LocationIdentifierSchemaDefinition;
//# sourceMappingURL=identifier.js.map