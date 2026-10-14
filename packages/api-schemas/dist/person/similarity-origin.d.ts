import { z } from "zod/v4";
/**
 * Provenance origin for a similar-person result row.
 *
 * @openapiSchema PersonSimilarityOrigin
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