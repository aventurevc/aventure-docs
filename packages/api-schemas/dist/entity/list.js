// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingMatchSchema } from "../content/embedding-match.js";
import { EntityEnrichmentSchema } from "./enrichment.js";
import { EntitySchema } from "./entity.js";
import { EntityFundraiseTransactionSchema } from "./fundraise-transaction.js";
import { EntityListResearchSchema } from "./list-research.js";
import { EntityProfileStatusSchema } from "./profile-status.js";
import { EntityProviderSchema } from "./provider.js";
const EntityListSchemaDefinition = z.object({
    /** Public buyer of the newest completed acquisition; null for announced or non-public buyers. */
    acquirer: EntitySchema.nullish(),
    /** Core fields of the entity: identity, names, status, image, and source details */
    core: EntitySchema,
    /** The queued or running full-research run covering this record, whoever filed it; set only on federated search result and subject rows, null when none and on every other list read. */
    coveringRunId: z.uuid().nullish(),
    /** Supplemental entity data — addresses, classification tags, funding, text content, and URL links */
    enrichment: EntityEnrichmentSchema,
    /** Fundraise rounds associated with this entity */
    fundraiseRound: z.array(EntityFundraiseTransactionSchema),
    /** Derived profile status; read-only. */
    profileStatus: EntityProfileStatusSchema.optional(),
    /** Fund manager firm or product/service provider; null otherwise. */
    provider: EntityProviderSchema.nullish(),
    /** Research findings for list rows, without the written snippets */
    research: EntityListResearchSchema,
    /** Why this row matched a meaning-based (semantic) search; set only on semantic searches. */
    semanticMatch: ContentEmbeddingMatchSchema.nullish(),
});
/**
 * Entity row returned by list and batch-list reads. It includes core identity, additional data, research details, accelerator participation, and funding rounds, but not the relationship, newsArticle, person, sitemap, and research snippet sections that detail reads return. List rows show only current classifications; to see past ones, call the entity classifications endpoint with includeInactive=true. Addresses are a few current locations, not every office; use the entity addresses endpoint to list every office and association.
 *
 * @openapiSchema EntityList
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntitySimilarityResultSchema
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema NaturalSearchResultSchema
 * @usedBySchema PageEntityListSchema
 * @usedBySchema PageResultEntityListSchema
 * @contractShape entity.list
 * @contractRole canonical
 */
export const EntityListSchema = EntityListSchemaDefinition;
//# sourceMappingURL=list.js.map