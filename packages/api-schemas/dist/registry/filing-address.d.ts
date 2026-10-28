import { z } from "zod/v4";
declare const RegistryFilingAddressSchemaDefinition: z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type RegistryFilingAddressDefinition = z.infer<typeof RegistryFilingAddressSchemaDefinition>;
export interface RegistryFilingAddressSchemaInput extends z.input<typeof RegistryFilingAddressSchemaDefinition> {
}
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
export declare const RegistryFilingAddressSchema: z.ZodType<RegistryFilingAddressDefinition, RegistryFilingAddressSchemaInput>;
export type RegistryFilingAddress = z.infer<typeof RegistryFilingAddressSchema>;
export {};
//# sourceMappingURL=filing-address.d.ts.map