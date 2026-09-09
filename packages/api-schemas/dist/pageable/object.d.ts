import { z } from "zod/v4";
/**
 * @openapiSchema PageableObject
 * @endpoint GET /v1/classifications
 * @endpoint GET /v1/classifications/tags
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/news
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/detail/trending-news
 * @endpoint GET /v1/entities/sitemap-routes
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/media/screenshots
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/recent
 * @endpoint GET /v1/news/similar
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/detail/news
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/sitemap/entities/urls
 * @endpoint GET /v1/sitemap/url-slots
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/slug/redirects
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/news/{newsId}/slug/redirects
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/repositories
 * @endpoint GET /v1/people/{personId}/slug/redirects
 * @endpoint GET /v1/people/{personId}/texts
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint GET /v1/people/{slug}/blog-posts
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/news
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/search
 * @usedBySchema PageBlogPostSchema
 * @usedBySchema PageClassificationSchema
 * @usedBySchema PageContentSchema
 * @usedBySchema PageDatasourceFieldProvenanceSchema
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PageEntityAcquisitionSchema
 * @usedBySchema PageEntityDetailSchema
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @usedBySchema PageEntityFundraiseTransactionSchema
 * @usedBySchema PageEntityInvestorParticipationSchema
 * @usedBySchema PageEntityListSchema
 * @usedBySchema PageEntityListSummarySchema
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PageEntityRelationshipSchema
 * @usedBySchema PageEntityResearchDetailSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @usedBySchema PageEntitySchema
 * @usedBySchema PageEntitySimilarityResultSchema
 * @usedBySchema PageEntitySitemapUrlSchema
 * @usedBySchema PageEntityTagSchema
 * @usedBySchema PageEntityTextSchema
 * @usedBySchema PageEntityUrlLinkSchema
 * @usedBySchema PageEntityValuationTimeSeriesPointSchema
 * @usedBySchema PageGithubRepoSchema
 * @usedBySchema PageLocationDirectoryEntrySchema
 * @usedBySchema PageMediaScreenshotSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PagePersonInvestmentSchema
 * @usedBySchema PagePersonInvestorParticipationSchema
 * @usedBySchema PagePersonSchema
 * @usedBySchema PagePersonSimilarityResultSchema
 * @usedBySchema PageSitemapUrlSlotSchema
 * @usedBySchema PageUniqueIdSchema
 * @usedBySchema PageUrlSlugRedirectSchema
 * @contractShape pageable.object
 * @contractRole canonical
 * @ownerModule pageable/object.ts
 */
export declare const PageableObjectSchema: z.ZodObject<{
    offset: z.ZodOptional<z.ZodNumber>;
    paged: z.ZodOptional<z.ZodBoolean>;
    pageNumber: z.ZodOptional<z.ZodInt>;
    pageSize: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    unpaged: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PageableObject = z.infer<typeof PageableObjectSchema>;
//# sourceMappingURL=object.d.ts.map