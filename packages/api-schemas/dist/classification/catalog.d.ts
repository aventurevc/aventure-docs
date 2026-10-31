import { z } from "zod/v4";
declare const ClassificationCatalogSchemaDefinition: z.ZodObject<{
    bucket: z.ZodArray<z.ZodType<{
        alias: string[];
        bucket?: string | null | undefined;
        hierarchical: boolean;
        label: string;
        tag: ({
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            registry: string;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
        })[];
        tagCount: number;
        type: string;
    }, import("./catalog-bucket.ts").ClassificationCatalogBucketSchemaInput, z.core.$ZodTypeInternals<{
        alias: string[];
        bucket?: string | null | undefined;
        hierarchical: boolean;
        label: string;
        tag: ({
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            registry: string;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
        })[];
        tagCount: number;
        type: string;
    }, import("./catalog-bucket.ts").ClassificationCatalogBucketSchemaInput>>>;
    category: z.ZodArray<z.ZodType<{
        alias: string[];
        category: string;
        classification: {
            category: string;
            classificationId?: number | null | undefined;
            code?: number | null | undefined;
            codeText?: string | null | undefined;
            createdAt?: string | null | undefined;
            edition?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            registry: string;
            updatedAt?: string | null | undefined;
        }[];
        classificationCount: number;
        hierarchical: boolean;
        label: string;
    }, import("./catalog-category.ts").ClassificationCatalogCategorySchemaInput, z.core.$ZodTypeInternals<{
        alias: string[];
        category: string;
        classification: {
            category: string;
            classificationId?: number | null | undefined;
            code?: number | null | undefined;
            codeText?: string | null | undefined;
            createdAt?: string | null | undefined;
            edition?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            registry: string;
            updatedAt?: string | null | undefined;
        }[];
        classificationCount: number;
        hierarchical: boolean;
        label: string;
    }, import("./catalog-category.ts").ClassificationCatalogCategorySchemaInput>>>;
    generatedAt: z.ZodISODateTime;
    totalBucket: z.ZodInt;
    totalCategory: z.ZodInt;
    totalStandardizedClassification: z.ZodInt;
    totalTag: z.ZodInt;
}, z.core.$strip>;
type ClassificationCatalogDefinition = z.infer<typeof ClassificationCatalogSchemaDefinition>;
export interface ClassificationCatalogSchemaInput extends z.input<typeof ClassificationCatalogSchemaDefinition> {
}
/**
 * Full active entity classification taxonomy in one payload. Inactive tags are omitted.
 *
 * @openapiSchema ClassificationCatalog
 * @endpoint GET /v1/entities/classifications/catalog
 * @contractShape classification.catalog
 * @contractRole canonical
 */
export declare const ClassificationCatalogSchema: z.ZodType<ClassificationCatalogDefinition, ClassificationCatalogSchemaInput>;
export type ClassificationCatalog = z.infer<typeof ClassificationCatalogSchema>;
export {};
//# sourceMappingURL=catalog.d.ts.map