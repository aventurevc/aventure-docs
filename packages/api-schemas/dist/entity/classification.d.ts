import { z } from "zod/v4";
declare const EntityClassificationSchemaDefinition: z.ZodObject<{
    geoLocationExposure: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    industry: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    mainProduct: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    standardizedClassification: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, import("../standardized/classification.ts").StandardizedClassificationSchemaInput>>>>>;
    tag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeCustomer: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeModel: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeOwnership: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeRevenue: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeTechnologyUsed: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
}, z.core.$strip>;
type EntityClassificationDefinition = z.infer<typeof EntityClassificationSchemaDefinition>;
export interface EntityClassificationSchemaInput extends z.input<typeof EntityClassificationSchemaDefinition> {
}
/**
 * Entity classifications grouped by bucket. Reads return current classifications by default; includeInactive=true adds inactive and historical ones.
 *
 * @openapiSchema EntityClassification
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityBrandSchema
 * @usedBySchema EntityEnrichmentSchema
 * @contractShape entity.classification
 * @contractRole canonical
 */
export declare const EntityClassificationSchema: z.ZodType<EntityClassificationDefinition, EntityClassificationSchemaInput>;
export type EntityClassification = z.infer<typeof EntityClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map