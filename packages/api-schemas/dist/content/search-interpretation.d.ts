import { z } from "zod/v4";
declare const ContentSearchInterpretationSchemaDefinition: z.ZodObject<{
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    filter: z.ZodType<{
        contentType?: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite" | null | undefined;
        relation?: "about" | "by" | null | undefined;
        topic?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        contentType?: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite" | null | undefined;
        relation?: "about" | "by" | null | undefined;
        topic?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown>>;
    interpretation: z.ZodString;
    sort: z.ZodType<{
        order: {
            descending: boolean;
            field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        order: {
            descending: boolean;
            field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
        }[];
    }, unknown>>;
    unsupported: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ContentSearchInterpretationDefinition = z.infer<typeof ContentSearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language content search.
 *
 * @openapiSchema ContentSearchInterpretation
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchResultSchema
 * @contractShape content.search-interpretation
 * @contractRole canonical
 */
export declare const ContentSearchInterpretationSchema: z.ZodType<ContentSearchInterpretationDefinition>;
export type ContentSearchInterpretation = z.infer<typeof ContentSearchInterpretationSchema>;
export {};
//# sourceMappingURL=search-interpretation.d.ts.map