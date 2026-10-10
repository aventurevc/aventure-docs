import { z } from "zod/v4";
declare const EntityClassificationSchemaDefinition: z.ZodObject<{
    geoLocationExposure: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    industry: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    mainProduct: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    standardizedClassification: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, import("../classification/classification.ts").ClassificationSchemaInput & {
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
    }, z.core.$ZodTypeInternals<{
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
    }, import("../classification/classification.ts").ClassificationSchemaInput & {
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
    }>>>>>;
    tag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeCustomer: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeModel: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeOwnership: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeRevenue: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    typeTechnologyUsed: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodIntersection<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
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
    }, z.core.$strip>>>>>;
}, z.core.$strip>;
type EntityClassificationDefinition = z.infer<typeof EntityClassificationSchemaDefinition>;
export interface EntityClassificationSchemaInput extends z.input<typeof EntityClassificationSchemaDefinition> {
}
/**
 * Entity classification join rows grouped by bucket; default reads include only current joins, and includeInactive=true adds inactive/historical joins.
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