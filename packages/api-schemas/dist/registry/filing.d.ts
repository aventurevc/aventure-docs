import { z } from "zod/v4";
/**
 * Facts a government registry filing (SEC Form D, IRS, HRSA, NPPES) states about the organization. A lookup weighs each stored record's former names, addresses, team, registry ids, and founded year against them and matches without any model call only at about 220:1 odds. Invalid for a person lookup.
 *
 * @openapiSchema RegistryFiling
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @contractShape registry.filing
 * @contractRole canonical
 */
export declare const RegistryFilingSchema: z.ZodObject<{
    address: z.ZodOptional<z.ZodArray<z.ZodType<{
        addressLine1?: string | null | undefined;
        cityName?: string | null | undefined;
        postalCode?: string | null | undefined;
        stateAbbrev?: string | null | undefined;
    }, import("./filing-address.ts").RegistryFilingAddressSchemaInput, z.core.$ZodTypeInternals<{
        addressLine1?: string | null | undefined;
        cityName?: string | null | undefined;
        postalCode?: string | null | undefined;
        stateAbbrev?: string | null | undefined;
    }, import("./filing-address.ts").RegistryFilingAddressSchemaInput>>>>;
    incorporatedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    nameFormer: z.ZodOptional<z.ZodArray<z.ZodString>>;
    person: z.ZodOptional<z.ZodArray<z.ZodType<{
        executiveOfficer: boolean;
        nameFirst: string;
        nameLast: string;
    }, import("./filing-person.ts").RegistryFilingPersonSchemaInput, z.core.$ZodTypeInternals<{
        executiveOfficer: boolean;
        nameFirst: string;
        nameLast: string;
    }, import("./filing-person.ts").RegistryFilingPersonSchemaInput>>>>;
    uniqueId: z.ZodOptional<z.ZodArray<z.ZodObject<{
        effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        listingStanding: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
            delisted: "delisted";
            listed: "listed";
            suspended: "suspended";
        }>, z.ZodString]> & {
            enum: {
                delisted: "delisted";
                listed: "listed";
                suspended: "suspended";
            };
        }>>;
        shareClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        standingAsOf: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        venue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type RegistryFiling = z.infer<typeof RegistryFilingSchema>;
//# sourceMappingURL=filing.d.ts.map