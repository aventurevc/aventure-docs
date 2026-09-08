import { z } from "zod/v4";
declare const ClassificationCatalogBucketSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    creatable: z.ZodBoolean;
    hierarchical: z.ZodBoolean;
    label: z.ZodString;
    tag: z.ZodArray<z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>>;
    tagCount: z.ZodInt;
    type: z.ZodString;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationCatalogBucketDefinition = z.infer<typeof ClassificationCatalogBucketSchemaDefinition>;
/**
 * Classification bucket with active registry tags and accepted-spelling aliases.
 *
 * @openapiSchema ClassificationCatalogBucket
 * @endpoint GET /v1/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-bucket
 * @contractRole canonical
 */
export declare const ClassificationCatalogBucketSchema: z.ZodType<ClassificationCatalogBucketDefinition>;
export type ClassificationCatalogBucket = z.infer<typeof ClassificationCatalogBucketSchema>;
export {};
//# sourceMappingURL=catalog-bucket.d.ts.map