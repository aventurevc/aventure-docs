import { z } from "zod/v4";
/**
 * Nearest-neighbor content embedding match evidence.
 *
 * @openapiSchema ContentEmbeddingMatch
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListSchema
 * @usedBySchema PersonSchema
 * @contractShape content.embedding-match
 * @contractRole canonical
 */
export declare const ContentEmbeddingMatchSchema: z.ZodObject<{
    computedAt: z.ZodISODateTime;
    cosineDistance: z.ZodNumber;
    cosineScore: z.ZodNumber;
    modelVersion: z.ZodString;
    rank: z.ZodInt;
    sourceHash: z.ZodString;
    sourceId: z.ZodString;
    sourceJson: z.ZodString;
    sourceText: z.ZodString;
    sourceType: z.ZodEnum<{
        agentHelpDoc: "agentHelpDoc";
        blogPost: "blogPost";
        classificationCode: "classificationCode";
        classificationTag: "classificationTag";
        entity: "entity";
        newsArticle: "newsArticle";
        person: "person";
        product: "product";
        service: "service";
        text: "text";
    }>;
}, z.core.$strip>;
export type ContentEmbeddingMatch = z.infer<typeof ContentEmbeddingMatchSchema>;
//# sourceMappingURL=embedding-match.d.ts.map