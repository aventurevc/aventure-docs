import { z } from "zod/v4";
/**
 * Published page behind a research value, read from the provenance event that wrote the value. Absent for internal sources and for privacy, terms, or other legal pages.
 *
 * @openapiSchema EntityResearchPublicSource
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/research-snippets/{snippetId}
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchSnippetSchema
 * @contractShape entity.research-public-source
 * @contractRole canonical
 */
export declare const EntityResearchPublicSourceSchema: z.ZodObject<{
    lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    recordedAt: z.ZodISODateTime;
    sourceDetail: z.ZodString;
}, z.core.$strip>;
export type EntityResearchPublicSource = z.infer<typeof EntityResearchPublicSourceSchema>;
//# sourceMappingURL=research-public-source.d.ts.map