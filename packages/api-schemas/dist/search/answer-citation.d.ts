import { z } from "zod/v4";
declare const SearchAnswerCitationSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    source: z.ZodUnion<readonly [z.ZodEnum<{
        entityRecord: "entityRecord";
        fundraiseTransaction: "fundraiseTransaction";
        newsArticle: "newsArticle";
        personRecord: "personRecord";
        researchSnippet: "researchSnippet";
    }>, z.ZodString]>;
    sourceId: z.ZodString;
}, z.core.$strip>;
type SearchAnswerCitationDefinition = z.infer<typeof SearchAnswerCitationSchemaDefinition>;
/**
 * One piece of evidence an answer cites, by its owning record.
 *
 * @openapiSchema SearchAnswerCitation
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerParagraphSchema
 * @usedBySchema SearchAnswerSchema
 * @contractShape search.answer-citation
 * @contractRole canonical
 */
export declare const SearchAnswerCitationSchema: z.ZodType<SearchAnswerCitationDefinition>;
export type SearchAnswerCitation = z.infer<typeof SearchAnswerCitationSchema>;
export {};
//# sourceMappingURL=answer-citation.d.ts.map