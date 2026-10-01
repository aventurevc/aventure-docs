import { z } from "zod/v4";
/**
 * Published page behind a research value, read from its provenance. Absent when the value came from an internal source.
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
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchSnippetSchema
 * @contractShape entity.research-public-source
 * @contractRole canonical
 */
export declare const EntityResearchPublicSourceSchema: z.ZodObject<{
    changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sourceDetail: z.ZodString;
}, z.core.$strip>;
export type EntityResearchPublicSource = z.infer<typeof EntityResearchPublicSourceSchema>;
//# sourceMappingURL=research-public-source.d.ts.map