// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "./list.js";
import { EntitySimilarityContextSchema } from "./similarity-context.js";
const EntitySimilarityResultSchemaDefinition = z.object({
    entity: EntityListSchema,
    similarity: EntitySimilarityContextSchema,
});
/**
 * Similar entity list row with the provenance that explains why it appears. Rows carry the EntityList projection; load full detail through the entity detail endpoints.
 *
 * @openapiSchema EntitySimilarityResult
 * @endpoint GET /v1/entities/detail/similar
 * @usedBySchema PageEntitySimilarityResultSchema
 * @contractShape entity.similarity-result
 * @contractRole canonical
 */
export const EntitySimilarityResultSchema = EntitySimilarityResultSchemaDefinition;
//# sourceMappingURL=similarity-result.js.map