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
export declare const EntitySitemapSchema: z.ZodObject<{
    hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    hasAnalysis: z.ZodBoolean;
    hasEmployees: z.ZodBoolean;
    hasFundraising: z.ZodBoolean;
    hasNews: z.ZodBoolean;
    productServiceSlug: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type EntitySitemap = z.infer<typeof EntitySitemapSchema>;
//# sourceMappingURL=sitemap.d.ts.map