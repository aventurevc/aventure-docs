import { z } from "zod/v4";
declare const ContentSearchResultSchemaDefinition: z.ZodObject<{
    interpretation: z.ZodType<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        filter: {
            contentType?: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite" | null | undefined;
            relation?: "about" | "by" | null | undefined;
            topic?: string | null | undefined;
            year?: number | null | undefined;
        };
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
            }[];
        };
        unsupported?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        filter: {
            contentType?: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite" | null | undefined;
            relation?: "about" | "by" | null | undefined;
            topic?: string | null | undefined;
            year?: number | null | undefined;
        };
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
            }[];
        };
        unsupported?: string | null | undefined;
    }, unknown>>;
    result: z.ZodType<{
        content: {
            canonicalUrl?: string | null | undefined;
            contentId: string;
            contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
            createdAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            relation?: "about" | "by" | null | undefined;
            sourceDomain?: string | null | undefined;
            sourceName?: string | null | undefined;
            summary?: string | null | undefined;
            title: string;
            topic?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url?: string | null | undefined;
            year?: number | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown, z.core.$ZodTypeInternals<{
        content: {
            canonicalUrl?: string | null | undefined;
            contentId: string;
            contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
            createdAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            relation?: "about" | "by" | null | undefined;
            sourceDomain?: string | null | undefined;
            sourceName?: string | null | undefined;
            summary?: string | null | undefined;
            title: string;
            topic?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url?: string | null | undefined;
            year?: number | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown>>;
}, z.core.$strip>;
type ContentSearchResultDefinition = z.infer<typeof ContentSearchResultSchemaDefinition>;
/**
 * Natural-language content search result: planner interpretation plus page.
 *
 * @openapiSchema ContentSearchResult
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @contractShape content.search-result
 * @contractRole canonical
 */
export declare const ContentSearchResultSchema: z.ZodType<ContentSearchResultDefinition>;
export type ContentSearchResult = z.infer<typeof ContentSearchResultSchema>;
export {};
//# sourceMappingURL=search-result.d.ts.map