import { z } from "zod/v4";
declare const PublicationFacetSchemaDefinition: z.ZodObject<{
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
    count: z.ZodNumber;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PublicationFacetDefinition = z.infer<typeof PublicationFacetSchemaDefinition>;
/**
 * Number of content cards sharing one topic and content type in an owner's index.
 *
 * @openapiSchema PublicationFacet
 * @endpoint GET /v1/entities/{entityId}/content/facets
 * @endpoint GET /v1/people/{personId}/content/facets
 * @contractShape publication.facet
 * @contractRole canonical
 */
export declare const PublicationFacetSchema: z.ZodType<PublicationFacetDefinition>;
export type PublicationFacet = z.infer<typeof PublicationFacetSchema>;
export {};
//# sourceMappingURL=facet.d.ts.map