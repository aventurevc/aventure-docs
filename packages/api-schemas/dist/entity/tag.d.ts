import { z } from "zod/v4";
/**
 * Canonical classification tag projection. Catalog/search responses describe registry tags; entity-classification responses include classificationId plus join state.
 *
 * @openapiSchema EntityTag
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
 * @usedBySchema ClassificationCatalogBucketSchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape entity.tag
 * @contractRole canonical
 */
export declare const EntityTagSchema: z.ZodIntersection<z.ZodType<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
    bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    classificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    creatable: z.ZodBoolean;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodInt;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    writable: z.ZodBoolean;
}, z.core.$strip>>;
export type EntityTag = z.infer<typeof EntityTagSchema>;
//# sourceMappingURL=tag.d.ts.map