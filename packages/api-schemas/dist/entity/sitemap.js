// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Which of the entity's profile pages are listed in sitemap.xml; this does not confirm that a write succeeded. Each flag is true only when the page's data EXISTS AND every entity the page shows (this entity and any other, such as the acquired or acquiring company behind `hasAcquisitions`) is currently publicly visible (not hidden, and included in the sitemap). Flags come from a precomputed view that a scheduled refresh rebuilds; a refresh requested soon after a completed one waits for the next scheduled run, so polling sooner changes nothing. A `false` flag whose qualifying write committed after the last refresh started clears on the next refresh. A `false` flag whose write predates that refresh means an entity the page shows is still hidden: publish it, after checking that entity's own record.
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
    /** Whether `/companies/<slug>/acquisitions` is listed in the sitemap. True only when an acquisition relationship exists AND both the acquired and acquirer entities are publicly visible. `entities acquisitions list` returning zero rows for a confirmed acquisition relationship always means a counterpart entity is still hidden -- publish it; that list reads live rows and never lags. A `false` flag on a row newer than the last refresh is refresh lag (see `EntitySitemap`). */
    hasAcquisitions: z.boolean().default(false).optional(),
    /** Whether the entity's Analysis profile page is listed in the sitemap. */
    hasAnalysis: z.boolean(),
    /** Whether the entity's Employees profile page is listed in the sitemap. */
    hasEmployees: z.boolean(),
    /** Whether the entity's Fundraising profile page is listed in the sitemap. */
    hasFundraising: z.boolean(),
    /** Whether the entity's News profile page is listed in the sitemap. */
    hasNews: z.boolean(),
    /** Slugs of related Product/Service entities that should each get their own `/companies/<slug>/products-services/<productSlug>` URL, capped at `MAX_PRODUCT_SERVICE_SLUGS` server-side. Derived from current `productService` relationships in either stored direction; the entity relationships resource is the authoritative, read-your-writes view of those joins. */
    productServiceSlug: z.array(z.string()),
});
//# sourceMappingURL=sitemap.js.map