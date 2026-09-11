import { z } from "zod/v4";
declare const ClassificationSchemaDefinition: z.ZodObject<{
    creatable: z.ZodBoolean;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationDefinition = z.infer<typeof ClassificationSchemaDefinition>;
/**
 * @openapiSchema Classification
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
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityTagSchema
 * @usedBySchema StandardizedClassificationSchema
 * @contractShape classification.classification
 * @contractRole canonical
 */
export declare const ClassificationSchema: z.ZodType<ClassificationDefinition>;
export type Classification = z.infer<typeof ClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map