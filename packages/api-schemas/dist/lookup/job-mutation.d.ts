import { z } from "zod/v4";
declare const LookupJobMutationSchemaDefinition: z.ZodObject<{
    deterministic: z.ZodOptional<z.ZodBoolean>;
    mention: z.ZodOptional<z.ZodArray<z.ZodType<{
        name: string;
        providerName?: string | null | undefined;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON" | "PRODUCT_SERVICE";
    }, import("./mention.ts").LookupMentionSchemaInput, z.core.$ZodTypeInternals<{
        name: string;
        providerName?: string | null | undefined;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON" | "PRODUCT_SERVICE";
    }, import("./mention.ts").LookupMentionSchemaInput>>>>;
    omitRecords: z.ZodOptional<z.ZodBoolean>;
    sourceDocumentId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
type LookupJobMutationDefinition = z.infer<typeof LookupJobMutationSchemaDefinition>;
export interface LookupJobMutationSchemaInput extends z.input<typeof LookupJobMutationSchemaDefinition> {
}
/**
 * The article whose companies and people a lookup identifies. Send sourceUrl, sourceNewsId, or both; POST /v1/lookup/mentions also reads a recorded sourceDocumentId alone; lookup-only bulk jobs and POST /v1/lookup/mentions also accept mention instead. A job filed by Prefer: respond-async on POST /v1/lookup with kind in the JSON body carries that request's subject instead.
 *
 * @openapiSchema LookupJobMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mutation
 * @contractRole canonical
 */
export declare const LookupJobMutationSchema: z.ZodType<LookupJobMutationDefinition, LookupJobMutationSchemaInput>;
export type LookupJobMutation = z.infer<typeof LookupJobMutationSchema>;
export {};
//# sourceMappingURL=job-mutation.d.ts.map