import { z } from "zod/v4";
declare const ClassificationCatalogSchemaDefinition: z.ZodObject<{
    bucket: z.ZodArray<z.ZodType<{
        alias: string[];
        bucket?: string | null | undefined;
        creatable: boolean;
        hierarchical: boolean;
        label: string;
        tag: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[];
        tagCount: number;
        type: string;
        writable: boolean;
    }, import("./catalog-bucket.ts").ClassificationCatalogBucketSchemaInput, z.core.$ZodTypeInternals<{
        alias: string[];
        bucket?: string | null | undefined;
        creatable: boolean;
        hierarchical: boolean;
        label: string;
        tag: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[];
        tagCount: number;
        type: string;
        writable: boolean;
    }, import("./catalog-bucket.ts").ClassificationCatalogBucketSchemaInput>>>;
    category: z.ZodArray<z.ZodType<{
        alias: string[];
        category: string;
        classification: ({
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
        })[];
        classificationCount: number;
        creatable: boolean;
        hierarchical: boolean;
        label: string;
        writable: boolean;
    }, import("./catalog-category.ts").ClassificationCatalogCategorySchemaInput, z.core.$ZodTypeInternals<{
        alias: string[];
        category: string;
        classification: ({
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
        })[];
        classificationCount: number;
        creatable: boolean;
        hierarchical: boolean;
        label: string;
        writable: boolean;
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
 * Full active entity classification taxonomy in one payload. Dormant registry tags are omitted from the catalog and surface through write-time 409 recovery instead.
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