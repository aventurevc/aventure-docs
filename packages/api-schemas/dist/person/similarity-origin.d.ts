import { z } from "zod/v4";
/**
 * Provenance origin for a similar-person result row.
 *
 * @openapiSchema PersonSimilarityOrigin
 * @endpoint GET /v1/people/{personId}/similar
 * @usedBySchema PersonSimilarityContextSchema
 * @contractShape person.similarity-origin
 * @contractRole canonical
 */
export declare const PersonSimilarityOriginSchema: z.ZodEnum<{
    live: "live";
    precomputed: "precomputed";
}>;
export type PersonSimilarityOrigin = z.infer<typeof PersonSimilarityOriginSchema>;
//# sourceMappingURL=similarity-origin.d.ts.map