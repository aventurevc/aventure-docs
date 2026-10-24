// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "./person-owner.js";
import { EntityUrlCrawlCdnProviderSchema } from "./url-crawl-cdn-provider.js";
import { EntityUrlCrawlRenderModeSchema } from "./url-crawl-render-mode.js";
import { EntityUrlTypeSchema } from "./url-type.js";
/**
 * Canonical URL link resource with owner, status, crawl, and source metadata. Lifecycle state (current vs former, primary vs secondary) is encoded by `isCurrent` and `isPrimary` — `urlType` is the canonical platform role only and write values come from GET /v1/url-types. Readers accept new platform roles as deployments evolve. To record a rebrand or domain migration, retain the prior URL with the same `urlType` (typically `website`) and set `isCurrent=false, isPrimary=false`; never encode lifecycle in the platform role.
 *
 * @openapiSchema EntityUrlLink
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityBrandSchema
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema EntitySimilaritySummarySchema
 * @usedBySchema PageEntityUrlLinkSchema
 * @usedBySchema PersonEnrichmentSchema
 * @contractShape entity.url-link
 * @contractRole canonical
 */
export const EntityUrlLinkSchema = z.object({
    /** CDN provider from the latest URL probe. */
    crawlCdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
    /** Render mode from the latest URL probe. */
    crawlRenderMode: EntityUrlCrawlRenderModeSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    id: z.int().nullish(),
    /** `true` = owner currently uses this URL; `false` = historical/former (rebrand source domain, deprecated platform handle). The lifecycle state lives here, NEVER in the `urlType` discriminator. */
    isCurrent: z.boolean().nullish(),
    /** `true` = canonical/primary URL of this `urlType` for this owner. Only one row per (owner, urlType) may be `isCurrent=true` AND `isPrimary=true`. Retired rows are always non-primary, including when a write requests otherwise. */
    isPrimary: z.boolean().nullish(),
    /** Owning record, nested ids only: owner.entityId or owner.personId — exactly one is set, and no name fields. Writes are scoped by the owning entity/person route; owner is never a write field. */
    owner: EntityPersonOwnerSchema.nullish(),
    sourceId: z.string().nullish(),
    /** Latest URL status observation; a later probe may replace the submitted status. */
    status: z.string().nullish(),
    /** Time of the latest URL status observation. */
    statusChecked: z.iso.datetime({ offset: true }).nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical absolute URL after storage and live same-site host normalization. */
    url: z.string(),
    urlType: EntityUrlTypeSchema,
});
//# sourceMappingURL=url-link.js.map