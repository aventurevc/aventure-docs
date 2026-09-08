import { z } from "zod/v4";
declare const LocationIdentifierSchemaDefinition: z.ZodObject<{
    cityId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    cityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    countryIso2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodEnum<{
        city: "city";
        country: "country";
        state: "state";
    }>;
    stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    stateName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LocationIdentifierDefinition = z.infer<typeof LocationIdentifierSchemaDefinition>;
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
export declare const LocationIdentifierSchema: z.ZodType<LocationIdentifierDefinition>;
export type LocationIdentifier = z.infer<typeof LocationIdentifierSchema>;
export {};
//# sourceMappingURL=identifier.d.ts.map