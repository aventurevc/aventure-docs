import { z } from "zod/v4";
declare const EntityClassificationSuggestionSchemaDefinition: z.ZodObject<{
    alreadyJoined: z.ZodBoolean;
    classification: z.ZodUnion<readonly [z.ZodIntersection<z.ZodType<{
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
    }, z.core.$strip>>, z.ZodType<{
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
    }, import("../standardized/classification.ts").StandardizedClassificationSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("../standardized/classification.ts").StandardizedClassificationSchemaInput>>]>;
    rank: z.ZodInt;
    score: z.ZodNumber;
}, z.core.$strip>;
type EntityClassificationSuggestionDefinition = z.infer<typeof EntityClassificationSuggestionSchemaDefinition>;
export interface EntityClassificationSuggestionSchemaInput extends z.input<typeof EntityClassificationSuggestionSchemaDefinition> {
}
/**
 * Ranked classification suggestion derived from the entity profile and classification embeddings.
 *
 * @openapiSchema EntityClassificationSuggestion
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @contractShape entity.classification-suggestion
 * @contractRole canonical
 */
export declare const EntityClassificationSuggestionSchema: z.ZodType<EntityClassificationSuggestionDefinition, EntityClassificationSuggestionSchemaInput>;
export type EntityClassificationSuggestion = z.infer<typeof EntityClassificationSuggestionSchema>;
export {};
//# sourceMappingURL=classification-suggestion.d.ts.map