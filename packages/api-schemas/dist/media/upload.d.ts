import { z } from "zod/v4";
/**
 * Managed media asset reference with resolved CDN URL and target metadata
 *
 * @openapiSchema MediaUpload
 * @endpoint GET /v1/media
 * @endpoint GET /v1/entities/{entityId}/media/logo
 * @endpoint GET /v1/news/{newsId}/media/thumbnail
 * @endpoint GET /v1/people/{personId}/media/photo
 * @contractShape media.upload
 * @contractRole canonical
 */
export declare const MediaUploadSchema: z.ZodObject<{
    cdnUrl: z.ZodString;
    firstUploadedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mediaType: z.ZodEnum<{
        BLOG: "BLOG";
        ENTITY: "ENTITY";
        NEWS: "NEWS";
        PERSON: "PERSON";
    }>;
    path: z.ZodString;
    provenance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type MediaUpload = z.infer<typeof MediaUploadSchema>;
//# sourceMappingURL=upload.d.ts.map