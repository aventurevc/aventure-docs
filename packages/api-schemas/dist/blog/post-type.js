// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * External research-side blog-post source classification
 *
 * @openapiSchema BlogPostType
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{slug}/blog-posts
 * @usedBySchema BlogPostSchema
 * @contractShape blog.post-type
 * @contractRole canonical
 */
export const BlogPostTypeSchema = z.enum([
    "aventureBlog",
    "personalBlog",
    "employerBlog",
    "linkedin",
    "xTwitter",
    "medium",
    "substack",
    "other",
]);
//# sourceMappingURL=post-type.js.map