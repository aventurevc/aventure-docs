import { z } from "zod/v4";
/**
 * Create or update payload for attaching an external identifier to an owner. For PATCH, omitted fields preserve their existing values and source may be explicitly cleared with null.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @contractShape unique.id-mutation
 * @contractRole canonical
 */
export declare const UniqueIdMutationSchema: z.ZodObject<{
    identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type UniqueIdMutation = z.infer<typeof UniqueIdMutationSchema>;
//# sourceMappingURL=id-mutation.d.ts.map