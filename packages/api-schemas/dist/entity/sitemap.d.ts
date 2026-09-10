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
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/sitemap/entities/routes
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
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