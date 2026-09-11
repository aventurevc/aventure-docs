import { z } from "zod/v4";
declare const StandardizedClassificationSchemaDefinition: z.ZodIntersection<z.ZodType<{
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
    category: z.ZodString;
    code: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    creatable: z.ZodBoolean;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entityClassificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodInt;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    level: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    name: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    writable: z.ZodBoolean;
}, z.core.$strip>>;
type StandardizedClassificationDefinition = z.infer<typeof StandardizedClassificationSchemaDefinition>;
/**
 * Canonical standardized classification projection backed by res_classification_ref. Rows are join-existing-only; creatable is false until a taxonomy writer exists.
 *
 * @openapiSchema StandardizedClassification
 * @endpoint GET /v1/classifications
 * @endpoint GET /v1/classifications/catalog
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
 * @usedBySchema ClassificationCatalogCategorySchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape standardized.classification
 * @contractRole canonical
 */
export declare const StandardizedClassificationSchema: z.ZodType<StandardizedClassificationDefinition>;
export type StandardizedClassification = z.infer<typeof StandardizedClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map