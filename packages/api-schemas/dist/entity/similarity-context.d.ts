import { z } from "zod/v4";
declare const EntitySimilarityContextSchemaDefinition: z.ZodObject<{
    compositeScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    cosineScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    curatedAsOf: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    curatedRelationshipType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    curatedSource: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    derivedFromEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    matchedSectionWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin: z.ZodEnum<{
        computed: "computed";
        curated: "curated";
        derived: "derived";
        precomputed: "precomputed";
        semantic: "semantic";
    }>;
    rank: z.ZodInt;
    sharedSectionCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type EntitySimilarityContextDefinition = z.infer<typeof EntitySimilarityContextSchemaDefinition>;
/**
 * Per-row provenance for a similar-entity result
 *
 * @openapiSchema EntitySimilarityContext
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/{entityId}/similar
 * @usedBySchema EntitySimilarityResultSchema
 * @contractShape entity.similarity-context
 * @contractRole canonical
 */
export declare const EntitySimilarityContextSchema: z.ZodType<EntitySimilarityContextDefinition>;
export type EntitySimilarityContext = z.infer<typeof EntitySimilarityContextSchema>;
export {};
//# sourceMappingURL=similarity-context.d.ts.map