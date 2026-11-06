import { z } from "zod/v4";
/**
 * Source context and honest reading activity for a shared article, post, profile, or the caller's own captured document.
 *
 * @openapiSchema LookupSourceRead
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.source-read
 * @contractRole canonical
 */
export declare const LookupSourceReadSchema: z.ZodObject<{
    continuation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        deduped: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        jobId: z.ZodUUID;
        mode: z.ZodString;
        statusUrl: z.ZodString;
    }, z.core.$strip>>>;
    faviconUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        ARTICLE: "ARTICLE";
        DOCUMENT: "DOCUMENT";
        POST: "POST";
        PROFILE: "PROFILE";
    }>, z.ZodString]> & {
        enum: {
            ARTICLE: "ARTICLE";
            DOCUMENT: "DOCUMENT";
            POST: "POST";
            PROFILE: "PROFILE";
        };
    }>>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    message: z.ZodArray<z.ZodString>;
    p95Ms: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    phase: z.ZodUnion<readonly [z.ZodEnum<{
        MATCHING: "MATCHING";
        READING: "READING";
    }>, z.ZodString]> & {
        enum: {
            MATCHING: "MATCHING";
            READING: "READING";
        };
    };
    publication: z.ZodString;
}, z.core.$strip>;
export type LookupSourceRead = z.infer<typeof LookupSourceReadSchema>;
//# sourceMappingURL=source-read.d.ts.map