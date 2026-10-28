// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RegistryFilingPersonSchemaDefinition = z.object({
    /** True when the filing names this person an executive officer. */
    executiveOfficer: z.boolean(),
    /** Given name. */
    nameFirst: z.string().max(200),
    /** Family name. */
    nameLast: z.string().max(200),
});
/**
 * One person a registry filing names.
 *
 * @openapiSchema RegistryFilingPerson
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema RegistryFilingSchema
 * @contractShape registry.filing-person
 * @contractRole canonical
 */
export const RegistryFilingPersonSchema = RegistryFilingPersonSchemaDefinition;
//# sourceMappingURL=filing-person.js.map