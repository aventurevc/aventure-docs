// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Sub-route eligibility GATE for sitemap.xml emission, not a write receipt. Each boolean is true only when the underlying rows EXIST AND every entity that sub-route renders (this entity and any counterpart, e.g. the acquired/acquirer company behind `hasAcquisitions`) currently passes publication visibility (not hidden, on sitemap). A `false` flag when you know the data exists means an unmet visibility prerequisite -- publish the hidden entity -- confirmed against the owning command-side read; it is an active gate result, not refresh lag, and a flag being `false` says nothing succeeded-and-is-fine. Served from a materialized projection (`mv_entity_sitemap_url_slots`) refreshed asynchronously, so a `true` flag can trail a gate that was just satisfied, but a successful write alone does not flip any flag.
 *
 * @openapiSchema EntitySitemap
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/sitemap-routes
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntitySchema
 * @contractShape entity.sitemap
 * @contractRole canonical
 */
export const EntitySitemapSchema = z.object({
    /** Whether `/companies/<slug>/acquisitions` should be emitted. True only when an acquisition relationship exists AND both the acquired and acquirer entities are publicly visible. A confirmed acquisition relationship row with this flag `false` (or with `entities acquisitions list` returning zero rows) means a counterpart entity is still hidden -- publish it -- it is a visibility gate, not list lag. */
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