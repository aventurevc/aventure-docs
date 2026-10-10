import { z } from "zod/v4";
declare const ClassificationCatalogBucketSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    creatable: z.ZodBoolean;
    hierarchical: z.ZodBoolean;
    label: z.ZodString;
    tag: z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("./classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("./classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>;
    tagCount: z.ZodInt;
    type: z.ZodString;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationCatalogBucketDefinition = z.infer<typeof ClassificationCatalogBucketSchemaDefinition>;
export interface ClassificationCatalogBucketSchemaInput extends z.input<typeof ClassificationCatalogBucketSchemaDefinition> {
}
/**
 * Classification bucket with active registry tags and accepted-spelling aliases.
 *
 * @openapiSchema ClassificationCatalogBucket
 * @endpoint GET /v1/entities/classifications/catalog
 * @usedBySchema ClassificationCatalogSchema
 * @contractShape classification.catalog-bucket
 * @contractRole canonical
 */
export declare const ClassificationCatalogBucketSchema: z.ZodType<ClassificationCatalogBucketDefinition, ClassificationCatalogBucketSchemaInput>;
export type ClassificationCatalogBucket = z.infer<typeof ClassificationCatalogBucketSchema>;
export {};
//# sourceMappingURL=catalog-bucket.d.ts.map