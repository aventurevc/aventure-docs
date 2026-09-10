import { z } from "zod/v4";
/**
 * Discriminator for unified content embedding source partitions
 *
 * @openapiSchema ContentSourceType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
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