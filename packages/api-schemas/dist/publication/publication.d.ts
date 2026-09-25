import { z } from "zod/v4";
declare const PublicationSchemaDefinition: z.ZodObject<{
    canonicalUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contentId: z.ZodString;
    contentType: z.ZodEnum<{
        blogPost: "blogPost";
        externalSocialPost: "externalSocialPost";
        newsArticle: "newsArticle";
        repository: "repository";
        repositoryOwner: "repositoryOwner";
        researchPaper: "researchPaper";
        webPage: "webPage";
        webSite: "webSite";
    }>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    relation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        about: "about";
        by: "by";
    }>>>;
    sourceDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    year: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type PublicationDefinition = z.infer<typeof PublicationSchemaDefinition>;
/**
 * Canonical public content card across news, blog posts, social posts, repositories, websites, pages, and research papers.
 *
 * @openapiSchema Publication
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PagePublicationSchema
 * @contractShape publication.publication
 * @contractRole canonical
 */
export declare const PublicationSchema: z.ZodType<PublicationDefinition>;
export type Publication = z.infer<typeof PublicationSchema>;
export {};
//# sourceMappingURL=publication.d.ts.map