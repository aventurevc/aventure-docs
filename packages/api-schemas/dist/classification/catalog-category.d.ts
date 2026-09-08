import { z } from "zod/v4";
declare const ClassificationCatalogCategorySchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    category: z.ZodString;
    classification: z.ZodArray<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown>>>;
    classificationCount: z.ZodInt;
    creatable: z.ZodBoolean;
    hierarchical: z.ZodBoolean;
    label: z.ZodString;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationCatalogCategoryDefinition = z.infer<typeof ClassificationCatalogCategorySchemaDefinition>;
/**
 * Standardized classification category with accepted spellings and registry rows.
 *
 * @openapiSchema ClassificationCatalogCategory
 * @endpoint GET /v1/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-category
 * @contractRole canonical
 */
export declare const ClassificationCatalogCategorySchema: z.ZodType<ClassificationCatalogCategoryDefinition>;
export type ClassificationCatalogCategory = z.infer<typeof ClassificationCatalogCategorySchema>;
export {};
//# sourceMappingURL=catalog-category.d.ts.map