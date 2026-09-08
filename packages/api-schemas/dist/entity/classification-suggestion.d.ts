import { z } from "zod/v4";
declare const EntityClassificationSuggestionSchemaDefinition: z.ZodObject<{
    alreadyJoined: z.ZodBoolean;
    classification: z.ZodUnion<readonly [z.ZodType<{
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
    }, unknown>>, z.ZodType<{
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
    }, unknown>>]>;
    creatable: z.ZodBoolean;
    rank: z.ZodInt;
    score: z.ZodNumber;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type EntityClassificationSuggestionDefinition = z.infer<typeof EntityClassificationSuggestionSchemaDefinition>;
/**
 * Ranked classification suggestion derived from the enriched entity profile and classification centroid embeddings. Returned by the default classification discovery endpoint before callers create source-backed classification joins.
 *
 * @openapiSchema EntityClassificationSuggestion
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @contractShape entity.classification-suggestion
 * @contractRole canonical
 */
export declare const EntityClassificationSuggestionSchema: z.ZodType<EntityClassificationSuggestionDefinition>;
export type EntityClassificationSuggestion = z.infer<typeof EntityClassificationSuggestionSchema>;
export {};
//# sourceMappingURL=classification-suggestion.d.ts.map