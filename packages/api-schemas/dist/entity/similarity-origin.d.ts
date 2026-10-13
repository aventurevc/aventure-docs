import { z } from "zod/v4";
/**
 * Provenance origin for a similar-entity result row.
 *
 * @openapiSchema EntitySimilarityOrigin
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntitySimilarityContextSchema
 * @contractShape entity.similarity-origin
 * @contractRole canonical
 */
export declare const EntitySimilarityOriginSchema: z.ZodEnum<{
    computed: "computed";
    curated: "curated";
    derived: "derived";
    precomputed: "precomputed";
    semantic: "semantic";
}>;
export type EntitySimilarityOrigin = z.infer<typeof EntitySimilarityOriginSchema>;
//# sourceMappingURL=similarity-origin.d.ts.map