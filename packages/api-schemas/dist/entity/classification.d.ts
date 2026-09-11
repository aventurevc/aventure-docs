import { z } from "zod/v4";
declare const EntityClassificationSchemaDefinition: z.ZodObject<{
    geoLocationExposure: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    industry: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    mainProduct: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
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
    }, unknown>>>>>;
    tag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    typeCustomer: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    typeModel: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    typeOwnership: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    typeRevenue: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
    typeTechnologyUsed: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodType<{
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
    }, unknown>>>>>;
}, z.core.$strip>;
type EntityClassificationDefinition = z.infer<typeof EntityClassificationSchemaDefinition>;
/**
 * Entity classification join rows grouped by bucket; default reads include only current joins, and includeInactive=true adds inactive/historical joins.
 *
 * @openapiSchema EntityClassification
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @contractShape entity.classification
 * @contractRole canonical
 */
export declare const EntityClassificationSchema: z.ZodType<EntityClassificationDefinition>;
export type EntityClassification = z.infer<typeof EntityClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map