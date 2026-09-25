import { z } from "zod/v4";
/**
 * Public source family for canonical content cards.
 *
 * @openapiSchema PublicationType
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/entities/{entityId}/content/facets
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint GET /v1/people/{personId}/content/facets
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationFacetSchema
 * @usedBySchema PublicationSchema
 * @contractShape publication.type
 * @contractRole canonical
 */
export declare const PublicationTypeSchema: z.ZodEnum<{
    blogPost: "blogPost";
    externalSocialPost: "externalSocialPost";
    newsArticle: "newsArticle";
    repository: "repository";
    repositoryOwner: "repositoryOwner";
    researchPaper: "researchPaper";
    webPage: "webPage";
    webSite: "webSite";
}>;
export type PublicationType = z.infer<typeof PublicationTypeSchema>;
//# sourceMappingURL=type.d.ts.map