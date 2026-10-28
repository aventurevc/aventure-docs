// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityEnrichmentSchema } from "./enrichment.js";
import { EntitySchema } from "./entity.js";
import { EntityFundraiseTransactionSchema } from "./fundraise-transaction.js";
import { EntityProfileStatusSchema } from "./profile-status.js";
import { EntityProviderSchema } from "./provider.js";
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
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema EntityResolutionSchema
 * @usedBySchema FederatedSearchSchema
 * @usedBySchema PageEntityDetailSchema
 * @contractShape entity.detail
 * @contractRole canonical
 */
export const EntityDetailSchema = z.object({
    /** Core entity identity, naming, status, image, and source metadata. */
    core: EntitySchema,
    /** The queued or running full-research run covering this record; null when none, and always null on people embedded in another record. */
    coveringRunId: z.uuid().nullish(),
    /** Entity enrichment: addresses, classification, funding summary, text, and URL links. */
    enrichment: EntityEnrichmentSchema,
    /** Fundraise rounds associated with this entity. When newsArticle or an external source reports a newer round not yet listed here, report both and ask the user whether to request a record update via POST /v1/entities/{entityId}/enrichments (CLI: entities enrichments enrich; MCP: aventure_job enrichEntity). */
    fundraiseRound: z.array(EntityFundraiseTransactionSchema),
    /** News articles associated with this entity; full-detail search carries the first few, and GET /v1/news?owner.entityId={entityId} lists them all. Articles whose headline names the entity (brand or alias) and were published within a recent window lead, then newest first; explicit sorts and text search on the list are unchanged. When an indexed article reports a newer funding round, role, or milestone not yet reflected in structured fields, report both and offer to request an update on the record. */
    newsArticle: z.array(NewsSchema),
    /** People associated with this entity; full-detail search carries the first few, and GET /v1/entities/{entityId}/people lists them all. */
    person: z.array(PersonDetailSchema),
    /** Derived profile status; read-only. */
    profileStatus: EntityProfileStatusSchema.optional(),
    /** Fund manager firm or product/service provider; null otherwise. */
    provider: EntityProviderSchema.nullish(),
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