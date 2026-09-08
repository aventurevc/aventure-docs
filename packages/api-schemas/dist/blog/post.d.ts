import { z } from "zod/v4";
declare const BlogPostSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    isCurrent: z.ZodBoolean;
    lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mentionedEntityId: z.ZodArray<z.ZodUUID>;
    mentionedPersonId: z.ZodArray<z.ZodUUID>;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summaryGeneratedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodEnum<{
        aventureBlog: "aventureBlog";
        employerBlog: "employerBlog";
        linkedin: "linkedin";
        medium: "medium";
        other: "other";
        personalBlog: "personalBlog";
        substack: "substack";
        xTwitter: "xTwitter";
    }>;
    updatedAt: z.ZodISODateTime;
    url: z.ZodString;
}, z.core.$strip>;
type BlogPostDefinition = z.infer<typeof BlogPostSchemaDefinition>;
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
export declare const BlogPostSchema: z.ZodType<BlogPostDefinition>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
export {};
//# sourceMappingURL=post.d.ts.map