import { z } from "zod/v4";
declare const LookupJobMutationSchemaDefinition: z.ZodObject<{
    mention: z.ZodOptional<z.ZodArray<z.ZodType<{
        name: string;
        providerName?: string | null | undefined;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON" | "PRODUCT_SERVICE";
    }, unknown, z.core.$ZodTypeInternals<{
        name: string;
        providerName?: string | null | undefined;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON" | "PRODUCT_SERVICE";
    }, unknown>>>>;
    sourceDocumentId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kind: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            ENTITY: "ENTITY";
            PERSON: "PERSON";
        }>>>;
        location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        providerId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
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
/**
 * The article whose companies and people a lookup identifies. Send sourceUrl, sourceNewsId, or both; POST /v1/lookup-mentions also reads a recorded sourceDocumentId alone; lookup-only bulk jobs and POST /v1/lookup-mentions also accept mention instead. A job filed by Prefer: respond-async on GET /v1/lookup or POST /v1/entities/lookup carries that request's subject instead.
 *
 * @openapiSchema LookupJobMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mutation
 * @contractRole canonical
 */
export declare const LookupJobMutationSchema: z.ZodType<LookupJobMutationDefinition>;
export type LookupJobMutation = z.infer<typeof LookupJobMutationSchema>;
export {};
//# sourceMappingURL=job-mutation.d.ts.map