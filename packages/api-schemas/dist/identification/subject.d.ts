import { z } from "zod/v4";
/**
 * The company, Product, Service, or person to identify. Send the name, a URL it owns, or both, plus every location and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema LookupJobMutationSchema
 * @contractShape identification.subject
 * @contractRole canonical
 */
export declare const IdentificationSubjectSchema: z.ZodObject<{
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employer: z.ZodOptional<z.ZodArray<z.ZodString>>;
    filing: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        address: z.ZodOptional<z.ZodArray<z.ZodType<{
            addressLine1?: string | null | undefined;
            cityName?: string | null | undefined;
            postalCode?: string | null | undefined;
            stateAbbrev?: string | null | undefined;
        }, import("../registry/filing-address.ts").RegistryFilingAddressSchemaInput, z.core.$ZodTypeInternals<{
            addressLine1?: string | null | undefined;
            cityName?: string | null | undefined;
            postalCode?: string | null | undefined;
            stateAbbrev?: string | null | undefined;
        }, import("../registry/filing-address.ts").RegistryFilingAddressSchemaInput>>>>;
        incorporatedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        nameFormer: z.ZodOptional<z.ZodArray<z.ZodString>>;
        person: z.ZodOptional<z.ZodArray<z.ZodType<{
            executiveOfficer: boolean;
            nameFirst: string;
            nameLast: string;
        }, import("../registry/filing-person.ts").RegistryFilingPersonSchemaInput, z.core.$ZodTypeInternals<{
            executiveOfficer: boolean;
            nameFirst: string;
            nameLast: string;
        }, import("../registry/filing-person.ts").RegistryFilingPersonSchemaInput>>>>;
        uniqueId: z.ZodOptional<z.ZodArray<z.ZodObject<{
            identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        ENTITY: "ENTITY";
        PERSON: "PERSON";
    }>>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    providerId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    sourceIdentifier: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    url: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type IdentificationSubject = z.infer<typeof IdentificationSubjectSchema>;
//# sourceMappingURL=subject.d.ts.map