import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/media
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/provenance/latest
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/media/logo
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/news/{newsId}/media/thumbnail
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/media/photo
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema MediaUploadSchema
 * @usedBySchema PersonSchema
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