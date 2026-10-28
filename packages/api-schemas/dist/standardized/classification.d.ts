import { z } from "zod/v4";
declare const StandardizedClassificationSchemaDefinition: z.ZodObject<{
    category: z.ZodString;
    classificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodInt;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    level: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    name: z.ZodString;
    registry: z.ZodUnion<readonly [z.ZodEnum<{
        editorial: "editorial";
        standardized: "standardized";
    }>, z.ZodString]> & {
        enum: {
            editorial: "editorial";
            standardized: "standardized";
        };
    };
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type StandardizedClassificationDefinition = z.infer<typeof StandardizedClassificationSchemaDefinition>;
export interface StandardizedClassificationSchemaInput extends z.input<typeof StandardizedClassificationSchemaDefinition> {
}
/**
 * Industry or ownership classification from a standard taxonomy such as NAICS, SIC, or ISIC, with its category, code, and hierarchy level.
 *
 * @openapiSchema StandardizedClassification
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
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema ClassificationCatalogCategorySchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @contractShape standardized.classification
 * @contractRole canonical
 */
export declare const StandardizedClassificationSchema: z.ZodType<StandardizedClassificationDefinition, StandardizedClassificationSchemaInput>;
export type StandardizedClassification = z.infer<typeof StandardizedClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map