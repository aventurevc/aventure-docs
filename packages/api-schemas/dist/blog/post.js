// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BlogPostTypeSchema } from "./post-type.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const BlogPostSchemaDefinition = z.object({
    /** Blog-post author when discovered by ingest */
    author: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }),
    /** Stable external feed/item identifier when available */
    externalId: z.string().nullish(),
    /** Type-safe UUID identifier for research-side external blog article links */
    id: z.uuid(),
    isCurrent: z.boolean(),
    /** Last time ingest fetched or summarized this blog-post URL */
    lastFetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Entities mentioned in the blog-post body, excluding the owner */
    mentionedEntityId: z.array(z.uuid()),
    /** People mentioned in the blog-post body, excluding the owner */
    mentionedPersonId: z.array(z.uuid()),
    /** Owning record, nested ids only: owner.entityId or owner.personId — exactly one is set. */
    owner: EntityPersonOwnerSchema,
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** LLM-generated blog-post summary from blog-post-ingest */
    summary: z.string().nullish(),
    /** Timestamp when summary was last generated */
    summaryGeneratedAt: z.iso.datetime({ offset: true }).nullish(),
    title: z.string().nullish(),
    /** Nullable blog-post topic key from app.contracts.web-crawl.section, such as product, blog, or press. */
    topic: z.string().nullish(),
    type: BlogPostTypeSchema,
    updatedAt: z.iso.datetime({ offset: true }),
    url: z.string(),
});
/**
 * External research-side blog post owned by exactly one entity or person. Unrelated to app.app_blog_article.
 *
 * @openapiSchema BlogPost
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{slug}/blog-posts
 * @usedBySchema PageBlogPostSchema
 * @contractShape blog.post
 * @contractRole canonical
 */
export const BlogPostSchema = BlogPostSchemaDefinition;
//# sourceMappingURL=post.js.map