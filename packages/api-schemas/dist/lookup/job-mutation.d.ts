import { z } from "zod/v4";
declare const LookupJobMutationSchemaDefinition: z.ZodObject<{
    mention: z.ZodOptional<z.ZodArray<z.ZodType<{
        name: string;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON";
    }, unknown, z.core.$ZodTypeInternals<{
        name: string;
        searchQuery?: string | undefined;
        type: "COMPANY" | "PERSON";
    }, unknown>>>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LookupJobMutationDefinition = z.infer<typeof LookupJobMutationSchemaDefinition>;
/**
 * The article whose companies and people a lookup job identifies. Send sourceUrl, sourceNewsId, or both; POST /v1/lookup-mentions also takes mention instead.
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