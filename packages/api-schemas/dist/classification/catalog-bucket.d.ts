import { z } from "zod/v4";
declare const ClassificationCatalogBucketSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hierarchical: z.ZodBoolean;
    label: z.ZodString;
    tag: z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("./classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("./classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
        bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        classificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        id: z.ZodInt;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    tagCount: z.ZodInt;
    type: z.ZodString;
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