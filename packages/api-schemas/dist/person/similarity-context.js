// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonSimilarityOriginSchema } from "./similarity-origin.js";
const PersonSimilarityContextSchemaDefinition = z.object({
    /** Composite section-fusion similarity score. */
    compositeScore: z.number().nullish(),
    /** Cosine similarity score where higher is closer. */
    cosineScore: z.number().nullish(),
    /** Total normalized source-section weight matched. */
    matchedSectionWeight: z.number().nullish(),
    origin: PersonSimilarityOriginSchema,
    /** 1-based position in the merged result page */
    rank: z.int(),
    /** Number of source/target sections compared. */
    sharedSectionCount: z.int().nullish(),
});
/**
 * Per-row provenance for a similar-person result.
 *
 * @openapiSchema PersonSimilarityContext
 * @endpoint GET /v1/people/detail/similar
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.similarity-context
 * @contractRole canonical
 */
export const PersonSimilarityContextSchema = PersonSimilarityContextSchemaDefinition;
//# sourceMappingURL=similarity-context.js.map