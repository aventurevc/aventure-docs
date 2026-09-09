// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSchemaDefinition = z.object({
    author: z.string().nullish(),
    category: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Article summary from the source publication feed; null means the feed supplied no description (expected absence, not an error) — full text is NewsDetail.content */
    excerpt: z.string().nullish(),
    externalNewsArticle: z.boolean().nullish(),
    /** Type-safe identifier for news articles */
    id: z.int(),
    newsImageThumbnail: z.string().nullish(),
    newsUrlOriginal: z.string().nullish(),
    pendingApproval: z.int().nullish(),
    publication: z.string().nullish(),
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    /** Article headline; the headline field is title */
    title: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical news owner for list and core semantics
 *
 * @openapiSchema News
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/news
 * @endpoint GET /v1/entities/detail/trending-news
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/detail
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/recent
 * @endpoint GET /v1/news/similar
 * @endpoint GET /v1/people/detail/news
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/news
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema NewsDetailSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PageResultNewsSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape news.news
 * @contractRole canonical
 */
export const NewsSchema = NewsSchemaDefinition;
//# sourceMappingURL=news.js.map