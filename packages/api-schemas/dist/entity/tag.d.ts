import { z } from "zod/v4";
declare const EntityTagSchemaDefinition: z.ZodIntersection<z.ZodType<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, unknown, z.core.$ZodTypeInternals<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, unknown>>, z.ZodObject<{
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
type EntityTagDefinition = z.infer<typeof EntityTagSchemaDefinition>;
/**
 * Canonical classification tag projection. Catalog/search responses describe registry tags; entity-classification responses include classificationId plus join state.
 *
 * @openapiSchema EntityTag
 * @endpoint GET /v1/classifications
 * @endpoint GET /v1/classifications/catalog
 * @endpoint GET /v1/classifications/tags
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema ClassificationCatalogBucketSchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @usedBySchema PageEntityTagSchema
 * @contractShape entity.tag
 * @contractRole canonical
 */
export declare const EntityTagSchema: z.ZodType<EntityTagDefinition>;
export type EntityTag = z.infer<typeof EntityTagSchema>;
export {};
//# sourceMappingURL=tag.d.ts.map