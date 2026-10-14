import { z } from "zod/v4";
declare const ClassificationCatalogCategorySchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    category: z.ZodString;
    classification: z.ZodArray<z.ZodType<{
        category: string;
        classificationId?: number | null | undefined;
        code?: number | null | undefined;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        registry: string;
        updatedAt?: string | null | undefined;
    }, import("../standardized/classification.ts").StandardizedClassificationSchemaInput, z.core.$ZodTypeInternals<{
        category: string;
        classificationId?: number | null | undefined;
        code?: number | null | undefined;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        registry: string;
        updatedAt?: string | null | undefined;
    }, import("../standardized/classification.ts").StandardizedClassificationSchemaInput>>>;
    classificationCount: z.ZodInt;
    hierarchical: z.ZodBoolean;
    label: z.ZodString;
}, z.core.$strip>;
type ClassificationCatalogCategoryDefinition = z.infer<typeof ClassificationCatalogCategorySchemaDefinition>;
export interface ClassificationCatalogCategorySchemaInput extends z.input<typeof ClassificationCatalogCategorySchemaDefinition> {
}
/**
 * Standardized classification category with accepted spellings and registry rows.
 *
 * @openapiSchema ClassificationCatalogCategory
 * @endpoint GET /v1/entities/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-category
 * @contractRole canonical
 */
export declare const ClassificationCatalogCategorySchema: z.ZodType<ClassificationCatalogCategoryDefinition, ClassificationCatalogCategorySchemaInput>;
export type ClassificationCatalogCategory = z.infer<typeof ClassificationCatalogCategorySchema>;
export {};
//# sourceMappingURL=catalog-category.d.ts.map