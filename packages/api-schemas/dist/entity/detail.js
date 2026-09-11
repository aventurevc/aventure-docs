// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityEnrichmentSchema } from "./enrichment.js";
import { EntitySchema } from "./entity.js";
import { EntityFundraiseTransactionSchema } from "./fundraise-transaction.js";
import { EntityRelationshipSchema } from "./relationship.js";
import { EntityResearchSchema } from "./research.js";
import { EntitySitemapSchema } from "./sitemap.js";
import { NewsSchema } from "../news/news.js";
import { PersonDetailSchema } from "../person/detail.js";
import { UniqueIdSchema } from "../unique/id.js";
/**
 * Full entity detail response: core entity, enrichment, governed research, relationships, external identifiers, fundraising, news, people, and sitemap eligibility. Core identity and naming fields live under core.
 *
 * @openapiSchema EntityDetail
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema EntityResolutionSchema
 * @usedBySchema PageEntityDetailSchema
 * @contractShape entity.detail
 * @contractRole canonical
 */
export const EntityDetailSchema = z.object({
    /** Core entity identity, naming, status, image, and source metadata. */
    core: EntitySchema,
    /** Entity enrichment: addresses, classification, funding summary, text, and URL links. */
    enrichment: EntityEnrichmentSchema,
    /** Fundraise rounds associated with this entity. */
    fundraiseRound: z.array(EntityFundraiseTransactionSchema),
    /** News articles associated with this entity. */
    newsArticle: z.array(NewsSchema),
    /** People associated with this entity. */
    person: z.array(PersonDetailSchema),
    /** Absolute canonical public URL when this detail has a renderable public route. */
    publicUrl: z.string().nullish(),
    /** Entity relationships. */
    relationship: z.array(EntityRelationshipSchema),
    /** Combined research disclosure: governed detail rows, snippets, and accelerator participation. */
    research: EntityResearchSchema,
    /** Sub-route eligibility computed once at the persistence boundary. */
    sitemap: EntitySitemapSchema,
    /** External registry identifiers associated with this entity. */
    uniqueId: z.array(UniqueIdSchema),
});
//# sourceMappingURL=detail.js.map