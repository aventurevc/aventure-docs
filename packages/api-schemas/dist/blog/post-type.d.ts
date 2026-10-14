import { z } from "zod/v4";
/**
 * External research-side blog-post source classification
 *
 * @openapiSchema BlogPostType
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema BlogPostSchema
 * @contractShape blog.post-type
 * @contractRole canonical
 */
export declare const BlogPostTypeSchema: z.ZodEnum<{
    aventureBlog: "aventureBlog";
    employerBlog: "employerBlog";
    linkedin: "linkedin";
    medium: "medium";
    other: "other";
    personalBlog: "personalBlog";
    substack: "substack";
    xTwitter: "xTwitter";
}>;
export type BlogPostType = z.infer<typeof BlogPostTypeSchema>;
//# sourceMappingURL=post-type.d.ts.map