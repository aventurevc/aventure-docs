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