// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSourceTypeSchema } from "./source-type.js";
/**
 * Nearest-neighbor content embedding match evidence.
 *
 * @openapiSchema ContentEmbeddingMatch
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListSchema
 * @usedBySchema PersonSchema
 * @contractShape content.embedding-match
 * @contractRole canonical
 */
export const ContentEmbeddingMatchSchema = z.object({
    /** Timestamp when the embedding row was computed. */
    computedAt: z.iso.datetime({ offset: true }),
    /** pgvector cosine distance where lower is closer. */
    cosineDistance: z.number(),
    /** Cosine similarity score where higher is closer. */
    cosineScore: z.number(),
    /** Embedding model/profile version for this row. */
    modelVersion: z.string(),
    /** One-based semantic rank within the returned ANN candidate set. */
    rank: z.int(),
    /** SHA-256 hash of the source content. */
    sourceHash: z.string(),
    /** Content embedding source identifier. */
    sourceId: z.string(),
    /** Serialized JSONB source document stored for the embedding row. */
    sourceJson: z.string(),
    /** Source text used to compute the stored embedding. */
    sourceText: z.string(),
    /** Stored content embedding source partition. */
    sourceType: ContentSourceTypeSchema,
});
//# sourceMappingURL=embedding-match.js.map