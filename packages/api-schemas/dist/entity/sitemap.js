// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Sub-route eligibility GATE for sitemap.xml emission, not a write receipt. Each boolean is true only when the underlying rows EXIST AND every entity that sub-route renders (this entity and any counterpart, e.g. the acquired/acquirer company behind `hasAcquisitions`) currently passes publication visibility (not hidden, on sitemap). Served from the materialized projection `mv_entity_sitemap_url_slots`, which the `sitemap-boundaries-refresh` job rebuilds on `app.materialized-view-refresh.sitemap-boundaries.interval` and which skips write-driven requests within its `min-success-interval` of the last performed refresh. A `false` flag whose qualifying write is newer than that refresh (the `Last-Modified` time that sitemap reads report) is refresh lag that clears on the next performed refresh; polling sooner changes nothing. A `false` flag whose write is older than that refresh is the gate result: an unmet visibility prerequisite -- publish the hidden entity -- confirmed against the owning command-side read.
 *
 * @openapiSchema EntitySitemap
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/news/{newsId}/related-entities
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntitySchema
 * @contractShape entity.sitemap
 * @contractRole canonical
 */
export const EntitySitemapSchema = z.object({
    /** Whether `/companies/<slug>/acquisitions` should be emitted. True only when an acquisition relationship exists AND both the acquired and acquirer entities are publicly visible. A confirmed acquisition relationship row older than the projection's last refresh with this flag `false` (or with `entities acquisitions list` returning zero rows) means a counterpart entity is still hidden -- publish it; a newer row is refresh lag (see `EntitySitemap`). */
    hasAcquisitions: z.boolean().default(false).optional(),
    /** Whether the profile Analysis sub-route should be emitted. */
    hasAnalysis: z.boolean(),
    /** Whether the profile Employees sub-route should be emitted. */
    hasEmployees: z.boolean(),
    /** Whether the profile Fundraising sub-route should be emitted. */
    hasFundraising: z.boolean(),
    /** Whether the profile News sub-route should be emitted. */
    hasNews: z.boolean(),
    /** Slugs of related Product/Service entities that should each get their own `/companies/<slug>/products-services/<productSlug>` URL, capped at `MAX_PRODUCT_SERVICE_SLUGS` server-side. Derived from current `productService` relationships in either stored direction; the entity relationships resource is the authoritative, read-your-writes view of those joins. */
    productServiceSlug: z.array(z.string()),
});
//# sourceMappingURL=sitemap.js.map