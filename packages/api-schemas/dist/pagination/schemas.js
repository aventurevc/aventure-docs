// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BlogPostSchema } from "../blog/post.js";
import { EmployeeCountSchema } from "../employee/count.js";
import { EntityAcquisitionSchema } from "../entity/acquisition.js";
import { EntityDetailSchema } from "../entity/detail.js";
import { EntitySchema } from "../entity/entity.js";
import { EntityFundraiseInvestorJoinSchema } from "../entity/fundraise-investor-join.js";
import { EntityFundraiseTransactionSchema } from "../entity/fundraise-transaction.js";
import { EntityInvestorParticipationSchema } from "../entity/investor-participation.js";
import { EntityListSchema } from "../entity/list.js";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { EntityRelationshipSchema } from "../entity/relationship.js";
import { EntityResearchDetailSchema } from "../entity/research-detail.js";
import { EntityResearchSnippetSchema } from "../entity/research-snippet.js";
import { EntitySimilarityResultSchema } from "../entity/similarity-result.js";
import { EntitySimilaritySummarySchema } from "../entity/similarity-summary.js";
import { EntityTagSchema } from "../entity/tag.js";
import { EntityTextSchema } from "../entity/text.js";
import { EntityUrlLinkSchema } from "../entity/url-link.js";
import { EntityValuationTimeSeriesPointSchema } from "../entity/valuation-time-series-point.js";
import { GithubRepoSchema } from "../github/repo.js";
import { NewsSchema } from "../news/news.js";
import { PageableObjectSchema } from "../pageable/object.js";
import { PersonDetailSchema } from "../person/detail.js";
import { PersonInvestmentSchema } from "../person/investment.js";
import { PersonInvestorParticipationSchema } from "../person/investor-participation.js";
import { PersonSchema } from "../person/person.js";
import { PersonSimilarityResultSchema } from "../person/similarity-result.js";
import { PublicationSchema } from "../publication/publication.js";
import { SortObjectSchema } from "../sort/object.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
import { UniqueIdSchema } from "../unique/id.js";
const PageBlogPostSchemaDefinition = z.object({
    content: z.array(BlogPostSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageBlogPost
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @contractShape pagination.page-blog-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageBlogPostSchema = PageBlogPostSchemaDefinition;
const PageClassificationSchemaDefinition = z.object({
    content: z.array(z.union([EntityTagSchema, StandardizedClassificationSchema])).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageClassification
 * @endpoint GET /v1/entities/classifications/tags
 * @contractShape pagination.page-classification
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageClassificationSchema = PageClassificationSchemaDefinition;
const PageEmployeeCountSchemaDefinition = z.object({
    content: z.array(EmployeeCountSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEmployeeCount
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @contractShape pagination.page-employee-count
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEmployeeCountSchema = PageEmployeeCountSchemaDefinition;
const PageEntitySchemaDefinition = z.object({
    content: z.array(EntitySchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntity
 * @endpoint GET /v1/news/{newsId}/related-entities
 * @contractShape pagination.page-entity
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySchema = PageEntitySchemaDefinition;
const PageEntityAcquisitionSchemaDefinition = z.object({
    content: z.array(EntityAcquisitionSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityAcquisition
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @contractShape pagination.page-entity-acquisition
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityAcquisitionSchema = PageEntityAcquisitionSchemaDefinition;
const PageEntityDetailSchemaDefinition = z.object({
    content: z.array(EntityDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityDetail
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/search
 * @contractShape pagination.page-entity-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityDetailSchema = PageEntityDetailSchemaDefinition;
const PageEntityFundraiseInvestorJoinSchemaDefinition = z.object({
    content: z.array(EntityFundraiseInvestorJoinSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins
 * @contractShape pagination.page-entity-fundraise-investor-join
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityFundraiseInvestorJoinSchema = PageEntityFundraiseInvestorJoinSchemaDefinition;
const PageEntityFundraiseTransactionSchemaDefinition = z.object({
    content: z.array(EntityFundraiseTransactionSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityFundraiseTransaction
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/investments
 * @contractShape pagination.page-entity-fundraise-transaction
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityFundraiseTransactionSchema = PageEntityFundraiseTransactionSchemaDefinition;
const PageEntityInvestorParticipationSchemaDefinition = z.object({
    content: z.array(EntityInvestorParticipationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityInvestorParticipation
 * @endpoint GET /v1/entities/{entityId}/investors
 * @contractShape pagination.page-entity-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityInvestorParticipationSchema = PageEntityInvestorParticipationSchemaDefinition;
const PageEntityListSchemaDefinition = z.object({
    content: z.array(EntityListSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityList
 * @endpoint GET /v1/entities
 * @endpoint POST /v1/entities/search
 * @contractShape pagination.page-entity-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityListSchema = PageEntityListSchemaDefinition;
const PageEntityPersonAssociationSchemaDefinition = z.object({
    content: z.array(EntityPersonAssociationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityPersonAssociation
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/people/{personId}/entities
 * @contractShape pagination.page-entity-person-association
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityPersonAssociationSchema = PageEntityPersonAssociationSchemaDefinition;
const PageEntityRelationshipSchemaDefinition = z.object({
    content: z.array(EntityRelationshipSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityRelationship
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @contractShape pagination.page-entity-relationship
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityRelationshipSchema = PageEntityRelationshipSchemaDefinition;
const PageEntityResearchDetailSchemaDefinition = z.object({
    content: z.array(EntityResearchDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityResearchDetail
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @contractShape pagination.page-entity-research-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityResearchDetailSchema = PageEntityResearchDetailSchemaDefinition;
const PageEntityResearchSnippetSchemaDefinition = z.object({
    content: z.array(EntityResearchSnippetSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityResearchSnippet
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @contractShape pagination.page-entity-research-snippet
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityResearchSnippetSchema = PageEntityResearchSnippetSchemaDefinition;
const PageEntitySimilarityResultSchemaDefinition = z.object({
    content: z.array(EntitySimilarityResultSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntitySimilarityResult
 * @endpoint GET /v1/entities/{entityId}/similar
 * @contractShape pagination.page-entity-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySimilarityResultSchema = PageEntitySimilarityResultSchemaDefinition;
const PageEntitySimilaritySummarySchemaDefinition = z.object({
    content: z.array(EntitySimilaritySummarySchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntitySimilaritySummary
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @contractShape pagination.page-entity-similarity-summary
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySimilaritySummarySchema = PageEntitySimilaritySummarySchemaDefinition;
const PageEntityTextSchemaDefinition = z.object({
    content: z.array(EntityTextSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityText
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/people/{personId}/texts
 * @contractShape pagination.page-entity-text
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityTextSchema = PageEntityTextSchemaDefinition;
const PageEntityUrlLinkSchemaDefinition = z.object({
    content: z.array(EntityUrlLinkSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityUrlLink
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/people/{personId}/urls
 * @contractShape pagination.page-entity-url-link
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityUrlLinkSchema = PageEntityUrlLinkSchemaDefinition;
const PageEntityValuationTimeSeriesPointSchemaDefinition = z.object({
    content: z.array(EntityValuationTimeSeriesPointSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityValuationTimeSeriesPoint
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @contractShape pagination.page-entity-valuation-time-series-point
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityValuationTimeSeriesPointSchema = PageEntityValuationTimeSeriesPointSchemaDefinition;
const PageGithubRepoSchemaDefinition = z.object({
    content: z.array(GithubRepoSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageGithubRepo
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/people/{personId}/repositories
 * @contractShape pagination.page-github-repo
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageGithubRepoSchema = PageGithubRepoSchemaDefinition;
const PageNewsSchemaDefinition = z.object({
    content: z.array(NewsSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageNews
 * @endpoint GET /v1/news
 * @endpoint GET /v1/entities/{entityId}/trending-news
 * @contractShape pagination.page-news
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageNewsSchema = PageNewsSchemaDefinition;
const PagePersonSchemaDefinition = z.object({
    content: z.array(PersonSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePerson
 * @endpoint GET /v1/people
 * @endpoint POST /v1/people/search
 * @contractShape pagination.page-person
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonSchema = PagePersonSchemaDefinition;
const PagePersonDetailSchemaDefinition = z.object({
    content: z.array(PersonDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonDetail
 * @endpoint POST /v1/people/lookup-batch
 * @contractShape pagination.page-person-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonDetailSchema = PagePersonDetailSchemaDefinition;
const PagePersonInvestmentSchemaDefinition = z.object({
    content: z.array(PersonInvestmentSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonInvestment
 * @endpoint GET /v1/people/{personId}/investments
 * @contractShape pagination.page-person-investment
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonInvestmentSchema = PagePersonInvestmentSchemaDefinition;
const PagePersonInvestorParticipationSchemaDefinition = z.object({
    content: z.array(PersonInvestorParticipationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonInvestorParticipation
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @contractShape pagination.page-person-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonInvestorParticipationSchema = PagePersonInvestorParticipationSchemaDefinition;
const PagePersonSimilarityResultSchemaDefinition = z.object({
    content: z.array(PersonSimilarityResultSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonSimilarityResult
 * @endpoint GET /v1/people/{personId}/similar
 * @contractShape pagination.page-person-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonSimilarityResultSchema = PagePersonSimilarityResultSchemaDefinition;
const PagePublicationSchemaDefinition = z.object({
    content: z.array(PublicationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePublication
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @contractShape pagination.page-publication
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePublicationSchema = PagePublicationSchemaDefinition;
const PageResultEntityListSchemaDefinition = z.object({
    content: z.array(EntityListSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultEntityList
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape pagination.page-result-entity-list
 * @contractRole canonical
 */
export const PageResultEntityListSchema = PageResultEntityListSchemaDefinition;
const PageResultNewsSchemaDefinition = z.object({
    content: z.array(NewsSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultNews
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape pagination.page-result-news
 * @contractRole canonical
 */
export const PageResultNewsSchema = PageResultNewsSchemaDefinition;
const PageResultPersonSchemaDefinition = z.object({
    content: z.array(PersonSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultPerson
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape pagination.page-result-person
 * @contractRole canonical
 */
export const PageResultPersonSchema = PageResultPersonSchemaDefinition;
const PageUniqueIdSchemaDefinition = z.object({
    content: z.array(UniqueIdSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageUniqueId
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @contractShape pagination.page-unique-id
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageUniqueIdSchema = PageUniqueIdSchemaDefinition;
//# sourceMappingURL=schemas.js.map