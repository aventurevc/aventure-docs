import { z } from "zod/v4";
declare const PublicationSearchInterpretationSchemaDefinition: z.ZodObject<{
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
type PublicationSearchInterpretationDefinition = z.infer<typeof PublicationSearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language content search.
 *
 * @openapiSchema PublicationSearchInterpretation
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSearchResultSchema
 * @contractShape publication.search-interpretation
 * @contractRole canonical
 */
export declare const PublicationSearchInterpretationSchema: z.ZodType<PublicationSearchInterpretationDefinition>;
export type PublicationSearchInterpretation = z.infer<typeof PublicationSearchInterpretationSchema>;
export {};
//# sourceMappingURL=search-interpretation.d.ts.map