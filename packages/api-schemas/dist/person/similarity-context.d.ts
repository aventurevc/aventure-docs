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
export interface PersonSimilarityContextSchemaInput extends z.input<typeof PersonSimilarityContextSchemaDefinition> {
}
/**
 * Per-row provenance for a similar-person result.
 *
 * @openapiSchema PersonSimilarityContext
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.similarity-context
 * @contractRole canonical
 */
export declare const PersonSimilarityContextSchema: z.ZodType<PersonSimilarityContextDefinition, PersonSimilarityContextSchemaInput>;
export type PersonSimilarityContext = z.infer<typeof PersonSimilarityContextSchema>;
export {};
//# sourceMappingURL=similarity-context.d.ts.map