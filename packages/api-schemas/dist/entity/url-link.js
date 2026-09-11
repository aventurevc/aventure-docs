// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "./person-owner.js";
import { EntityUrlCrawlCdnProviderSchema } from "./url-crawl-cdn-provider.js";
import { EntityUrlCrawlRenderModeSchema } from "./url-crawl-render-mode.js";
import { EntityUrlTypeSchema } from "./url-type.js";
const EntityUrlLinkSchemaDefinition = z.object({
    crawlCdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
    crawlRenderMode: EntityUrlCrawlRenderModeSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    id: z.int().nullish(),
    /** `true` = owner currently uses this URL; `false` = historical/former (rebrand source domain, deprecated platform handle). The lifecycle state lives here, NEVER in the `urlType` discriminator. */
    isCurrent: z.boolean().nullish(),
    /** `true` = canonical/primary URL of this `urlType` for this owner. Only one row per (owner, urlType) may be `isCurrent=true` AND `isPrimary=true`. */
    isPrimary: z.boolean().nullish(),
    /** Owning record, nested ids only: owner.entityId or owner.personId — exactly one is set, and no name fields. Writes are scoped by the owning entity/person route; owner is never a write field. */
    owner: EntityPersonOwnerSchema.nullish(),
    sourceId: z.string().nullish(),
    status: z.string().nullish(),
    statusChecked: z.iso.datetime({ offset: true }).nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical absolute HTTP URL value - validates scheme + host at construction */
    url: z.string(),
    urlType: EntityUrlTypeSchema,
});
/**
 * Canonical URL link resource with owner, status, crawl, and source metadata. Lifecycle state (current vs former, primary vs secondary) is encoded by `isCurrent` and `isPrimary` — `urlType` is the canonical platform role only and MUST be one of the closed `EntityUrlType` values. To record a rebrand or domain migration, retain the prior URL with the same `urlType` (typically `website`) and set `isCurrent=false, isPrimary=false`; do not propose new enum values.
 *
 * @openapiSchema EntityUrlLink
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema PageEntityUrlLinkSchema
 * @usedBySchema PersonEnrichmentSchema
 * @contractShape entity.url-link
 * @contractRole canonical
 */
export const EntityUrlLinkSchema = EntityUrlLinkSchemaDefinition;
//# sourceMappingURL=url-link.js.map