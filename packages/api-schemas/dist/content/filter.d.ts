import { z } from "zod/v4";
declare const ContentFilterSchemaDefinition: z.ZodObject<{
    contentType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        blogPost: "blogPost";
        externalSocialPost: "externalSocialPost";
        newsArticle: "newsArticle";
        repository: "repository";
        repositoryOwner: "repositoryOwner";
        researchPaper: "researchPaper";
        webPage: "webPage";
        webSite: "webSite";
    }>>>;
    relation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        about: "about";
        by: "by";
    }>>>;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    year: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type ContentFilterDefinition = z.infer<typeof ContentFilterSchemaDefinition>;
/**
 * Canonical filters for public content cards.
 *
 * @openapiSchema ContentFilter
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchInterpretationSchema
 * @contractShape content.filter
 * @contractRole canonical
 */
export declare const ContentFilterSchema: z.ZodType<ContentFilterDefinition>;
export type ContentFilter = z.infer<typeof ContentFilterSchema>;
export {};
//# sourceMappingURL=filter.d.ts.map