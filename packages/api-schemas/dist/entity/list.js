// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingMatchSchema } from "../content/embedding-match.js";
import { EntityEnrichmentSchema } from "./enrichment.js";
import { EntitySchema } from "./entity.js";
import { EntityFundraiseTransactionSchema } from "./fundraise-transaction.js";
import { EntityListResearchSchema } from "./list-research.js";
const EntityListSchemaDefinition = z.object({
    /** Flat entity core — identity, naming, status, image, and source metadata */
    core: EntitySchema,
    /** Supplemental entity data — addresses, classification tags, funding, text content, and URL links */
    enrichment: EntityEnrichmentSchema,
    /** Fundraise rounds associated with this entity */
    fundraiseRound: z.array(EntityFundraiseTransactionSchema),
    /** List-safe research disclosure without text snippets */
    research: EntityListResearchSchema,
    /** Semantic embedding match evidence populated only for semantic list reads. */
    semanticMatch: ContentEmbeddingMatchSchema.nullish(),
});
/**
 * Narrow entity row for list and batch-list reads. Keeps core identity, enrichment, governed research detail, accelerator participation, and fundraise rounds while omitting detail-only relationship, newsArticle, person, sitemap, and research snippet sections. Classification enrichment is current-only on list rows; use the entity classifications subresource with includeInactive=true to audit historical joins.
 *
 * @openapiSchema EntityList
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntitySimilarityResultSchema
 * @usedBySchema EntitySuggestionSchema
 * @usedBySchema PageEntityListSchema
 * @usedBySchema PageResultEntityListSchema
 * @contractShape entity.list
 * @contractRole canonical
 */
export const EntityListSchema = EntityListSchemaDefinition;
//# sourceMappingURL=list.js.map