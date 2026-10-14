import { z } from "zod/v4";
/**
 * Entity classification join registry discriminator for paths where editorial and standardized join row ids may collide.
 *
 * @openapiSchema ClassificationJoinRegistry
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/classifications/catalog
 * @endpoint GET /v1/entities/classifications/tags
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
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
 * @usedBySchema ClassificationSchema
 * @usedBySchema StandardizedClassificationSchema
 * @contractShape classification.join-registry
 * @contractRole canonical
 */
export declare const ClassificationJoinRegistrySchema: z.ZodUnion<readonly [z.ZodEnum<{
    editorial: "editorial";
    standardized: "standardized";
}>, z.ZodString]>;
export type ClassificationJoinRegistry = z.infer<typeof ClassificationJoinRegistrySchema>;
//# sourceMappingURL=join-registry.d.ts.map