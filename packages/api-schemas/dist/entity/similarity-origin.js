// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Provenance origin for a similar-entity result row.
 *
 * @openapiSchema EntitySimilarityOrigin
 * @endpoint GET /v1/entities/{entityId}/similar
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