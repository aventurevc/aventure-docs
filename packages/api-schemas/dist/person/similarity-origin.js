// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Provenance origin for a similar-person result row.
 *
 * @openapiSchema PersonSimilarityOrigin
 * @endpoint GET /v1/people/detail/similar
 * @usedBySchema PersonSimilarityContextSchema
 * @contractShape person.similarity-origin
 * @contractRole canonical
 */
export const PersonSimilarityOriginSchema = z.enum(["precomputed", "live"]);
//# sourceMappingURL=similarity-origin.js.map