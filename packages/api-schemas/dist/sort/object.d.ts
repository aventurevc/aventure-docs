import { z } from "zod/v4";
/**
 * @openapiSchema SortObject
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/classifications/tags
 * @endpoint GET /v1/news
 * @endpoint GET /v1/people
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/trending-news
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @endpoint GET /v1/news/{newsId}/related-entities
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/people/{personId}/repositories
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/texts
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/people/search
 * @usedBySchema PageableObjectSchema
 * @usedBySchema PageBlogPostSchema
 * @usedBySchema PageClassificationSchema
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PageEntityAcquisitionSchema
 * @usedBySchema PageEntityDetailSchema
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @usedBySchema PageEntityFundraiseTransactionSchema
 * @usedBySchema PageEntityInvestorParticipationSchema
 * @usedBySchema PageEntityListSchema
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PageEntityRelationshipSchema
 * @usedBySchema PageEntityResearchDetailSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @usedBySchema PageEntitySchema
 * @usedBySchema PageEntitySimilarityResultSchema
 * @usedBySchema PageEntitySimilaritySummarySchema
 * @usedBySchema PageEntityTextSchema
 * @usedBySchema PageEntityUrlLinkSchema
 * @usedBySchema PageEntityValuationTimeSeriesPointSchema
 * @usedBySchema PageGithubRepoSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PagePersonInvestmentSchema
 * @usedBySchema PagePersonInvestorParticipationSchema
 * @usedBySchema PagePersonSchema
 * @usedBySchema PagePersonSimilarityResultSchema
 * @usedBySchema PagePublicationSchema
 * @usedBySchema PageUniqueIdSchema
 * @contractShape sort.object
 * @contractRole canonical
 * @ownerModule sort/object.ts
 */
export declare const SortObjectSchema: z.ZodObject<{
    empty: z.ZodOptional<z.ZodBoolean>;
    sorted: z.ZodOptional<z.ZodBoolean>;
    unsorted: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SortObject = z.infer<typeof SortObjectSchema>;
//# sourceMappingURL=object.d.ts.map