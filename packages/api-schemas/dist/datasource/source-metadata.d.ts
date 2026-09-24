import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/entities/{entityId}/media/{mediaType}
 * @endpoint GET /v1/news/{newsId}/media/{mediaType}
 * @endpoint GET /v1/people/{personId}/media/{mediaType}
 * @usedBySchema MediaUploadSchema
 * @contractShape datasource.source-metadata
 * @contractRole canonical
 */
export declare const DatasourceSourceMetadataSchema: z.ZodObject<{
    changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type DatasourceSourceMetadata = z.infer<typeof DatasourceSourceMetadataSchema>;
//# sourceMappingURL=source-metadata.d.ts.map