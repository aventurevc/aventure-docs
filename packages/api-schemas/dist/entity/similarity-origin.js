// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Provenance origin for a similar-entity result row.
 *
 * @openapiSchema EntitySimilarityOrigin
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntitySimilarityContextSchema
 * @contractShape entity.similarity-origin
 * @contractRole canonical
 */
export const EntitySimilarityOriginSchema = z.enum([
    "curated",
    "semantic",
    "precomputed",
    "derived",
    "computed",
]);
//# sourceMappingURL=similarity-origin.js.map