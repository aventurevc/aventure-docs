import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema FundraiseInvestmentEvidenceSchema
 * @contractShape datasource.source-metadata
 * @contractRole canonical
 */
export declare const DatasourceSourceMetadataSchema: z.ZodObject<{
    changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type DatasourceSourceMetadata = z.infer<typeof DatasourceSourceMetadataSchema>;
//# sourceMappingURL=source-metadata.d.ts.map