import { z } from "zod/v4";
declare const PublicationFilterSchemaDefinition: z.ZodObject<{
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
type PublicationFilterDefinition = z.infer<typeof PublicationFilterSchemaDefinition>;
/**
 * Canonical filters for public content cards.
 *
 * @openapiSchema PublicationFilter
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSearchInterpretationSchema
 * @contractShape publication.filter
 * @contractRole canonical
 */
export declare const PublicationFilterSchema: z.ZodType<PublicationFilterDefinition>;
export type PublicationFilter = z.infer<typeof PublicationFilterSchema>;
export {};
//# sourceMappingURL=filter.d.ts.map