// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsTitleMentionSchema } from "./title-mention.js";
/**
 * A news article, as returned by news lists and the entity.news.published webhook.
 *
 * @openapiSchema News
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/trending-news
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/news/{newsId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @usedBySchema NewsDetailSchema
 * @usedBySchema NewsPublishedEventSchema
 * @usedBySchema PageNewsSchema
 * @usedBySchema PageResultNewsSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape news.news
 * @contractRole canonical
 */
export const NewsSchema = z.object({
    author: z.string().nullish(),
    category: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Article summary from the source publication feed; null means the feed supplied no description (expected absence, not an error) — full text is NewsDetail.content */
    excerpt: z.string().nullish(),
    externalNewsArticle: z.boolean().nullish(),
    /** Identifier of a news article */
    id: z.int(),
    newsImageThumbnail: z.string().nullish(),
    /** Canonical article URL after host and tracking-parameter normalization. */
    newsUrlOriginal: z.string().nullish(),
    publication: z.string().nullish(),
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Lowercase URL slug that identifies the record. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    /** Article headline; the headline field is title */
    title: z.string(),
    /** Sorted, non-overlapping UTF-16 ranges of linked public records' current names in title; empty when none match. */
    titleMention: z.array(NewsTitleMentionSchema).optional(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=news.js.map