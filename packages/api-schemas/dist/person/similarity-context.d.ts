import { z } from "zod/v4";
declare const PersonSimilarityContextSchemaDefinition: z.ZodObject<{
    compositeScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    cosineScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    matchedSectionWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin: z.ZodEnum<{
        live: "live";
        precomputed: "precomputed";
    }>;
    rank: z.ZodInt;
    sharedSectionCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type PersonSimilarityContextDefinition = z.infer<typeof PersonSimilarityContextSchemaDefinition>;
/**
 * Per-row provenance for a similar-person result.
 *
 * @openapiSchema PersonSimilarityContext
 * @endpoint GET /v1/people/{personId}/similar
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.similarity-context
 * @contractRole canonical
 */
export declare const PersonSimilarityContextSchema: z.ZodType<PersonSimilarityContextDefinition>;
export type PersonSimilarityContext = z.infer<typeof PersonSimilarityContextSchema>;
export {};
//# sourceMappingURL=similarity-context.d.ts.map