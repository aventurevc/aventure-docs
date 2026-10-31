import { z } from "zod/v4";
/**
 * Create or merge-patch an external identifier mapping. Omitted fields preserve existing values; listing qualifiers apply only to entity tickers and remain write-refused during the preserving-reader rollout.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @usedBySchema RegistryFilingSchema
 * @contractShape unique.id-mutation
 * @contractRole canonical
 */
export declare const UniqueIdMutationSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type UniqueIdMutation = z.infer<typeof UniqueIdMutationSchema>;
//# sourceMappingURL=id-mutation.d.ts.map