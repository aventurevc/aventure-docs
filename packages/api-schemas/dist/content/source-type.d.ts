import { z } from "zod/v4";
/**
 * Discriminator for unified content embedding source partitions
 *
 * @openapiSchema ContentSourceType
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema ContentEmbeddingMatchSchema
 * @contractShape content.source-type
 * @contractRole canonical
 */
export declare const ContentSourceTypeSchema: z.ZodEnum<{
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
export type ContentSourceType = z.infer<typeof ContentSourceTypeSchema>;
//# sourceMappingURL=source-type.d.ts.map