import { z } from "zod/v4";
declare const LookupJobMutationSchemaDefinition: z.ZodObject<{
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LookupJobMutationDefinition = z.infer<typeof LookupJobMutationSchemaDefinition>;
/**
 * The article whose companies and people a lookup job identifies. Send sourceUrl, sourceNewsId, or both.
 *
 * @openapiSchema LookupJobMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mutation
 * @contractRole canonical
 */
export declare const LookupJobMutationSchema: z.ZodType<LookupJobMutationDefinition>;
export type LookupJobMutation = z.infer<typeof LookupJobMutationSchema>;
export {};
//# sourceMappingURL=job-mutation.d.ts.map