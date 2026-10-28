// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RegistryFilingAddressSchemaDefinition = z.object({
    /** Street line, such as 6797 Winchester Circle. */
    addressLine1: z.string().max(200).nullish(),
    /** City name. */
    cityName: z.string().max(200).nullish(),
    /** Postal or ZIP code. */
    postalCode: z.string().max(200).nullish(),
    /** State or region abbreviation. */
    stateAbbrev: z.string().max(200).nullish(),
});
/**
 * One address a registry filing states.
 *
 * @openapiSchema RegistryFilingAddress
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema RegistryFilingSchema
 * @contractShape registry.filing-address
 * @contractRole canonical
 */
export const RegistryFilingAddressSchema = RegistryFilingAddressSchemaDefinition;
//# sourceMappingURL=filing-address.js.map