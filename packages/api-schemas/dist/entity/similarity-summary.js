// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "./entity.js";
import { EntitySimilarityContextSchema } from "./similarity-context.js";
import { EntityUrlLinkSchema } from "./url-link.js";
const EntitySimilaritySummarySchemaDefinition = z.object({
    core: EntitySchema,
    similarity: EntitySimilarityContextSchema,
    /** Current primary URL links, one per URL type */
    urlLink: z.array(EntityUrlLinkSchema),
});
/**
 * Lean similar-entity rail row: core identity, current URL links, and similarity provenance. Use EntitySimilarityResult for full EntityList rows.
 *
 * @openapiSchema EntitySimilaritySummary
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @usedBySchema PageEntitySimilaritySummarySchema
 * @contractShape entity.similarity-summary
 * @contractRole canonical
 */
export const EntitySimilaritySummarySchema = EntitySimilaritySummarySchemaDefinition;
//# sourceMappingURL=similarity-summary.js.map