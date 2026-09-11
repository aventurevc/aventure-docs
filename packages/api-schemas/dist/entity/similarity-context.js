// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySimilarityOriginSchema } from "./similarity-origin.js";
const EntitySimilarityContextSchemaDefinition = z.object({
    /** Composite (section-fusion) score. Populated only when origin=precomputed. */
    compositeScore: z.number().nullish(),
    /** Cosine similarity when origin=precomputed */
    cosineScore: z.number().nullish(),
    /** Curated as-of date when origin=curated */
    curatedAsOf: z.iso.date().nullish(),
    /** Curated relationship type when origin=curated */
    curatedRelationshipType: z.string().nullish(),
    /** Curated source URL/note when origin=curated */
    curatedSource: z.string().nullish(),
    /** Curated peer id that produced this row when origin=derived */
    derivedFromEntityId: z.uuid().nullish(),
    /** Total normalized source-section weight matched when origin=precomputed */
    matchedSectionWeight: z.number().nullish(),
    origin: EntitySimilarityOriginSchema,
    /** 1-based position in the merged result page */
    rank: z.int(),
    /** Number of source/target sections compared when origin=precomputed */
    sharedSectionCount: z.int().nullish(),
});
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
export const EntitySimilarityContextSchema = EntitySimilarityContextSchemaDefinition;
//# sourceMappingURL=similarity-context.js.map