import { z } from "zod/v4";
/**
 * Provenance origin for a similar-entity result row.
 *
 * @openapiSchema EntitySimilarityOrigin
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
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