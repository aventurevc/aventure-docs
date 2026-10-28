import { z } from "zod/v4";
declare const RegistryFilingPersonSchemaDefinition: z.ZodObject<{
    executiveOfficer: z.ZodBoolean;
    nameFirst: z.ZodString;
    nameLast: z.ZodString;
}, z.core.$strip>;
type RegistryFilingPersonDefinition = z.infer<typeof RegistryFilingPersonSchemaDefinition>;
export interface RegistryFilingPersonSchemaInput extends z.input<typeof RegistryFilingPersonSchemaDefinition> {
}
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
export declare const RegistryFilingPersonSchema: z.ZodType<RegistryFilingPersonDefinition, RegistryFilingPersonSchemaInput>;
export type RegistryFilingPerson = z.infer<typeof RegistryFilingPersonSchema>;
export {};
//# sourceMappingURL=filing-person.d.ts.map