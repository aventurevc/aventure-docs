import { z } from "zod/v4";
declare const SearchAnswerCitationSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    source: z.ZodEnum<{
        entityRecord: "entityRecord";
        newsArticle: "newsArticle";
        researchSnippet: "researchSnippet";
    }>;
    sourceId: z.ZodString;
}, z.core.$strip>;
type SearchAnswerCitationDefinition = z.infer<typeof SearchAnswerCitationSchemaDefinition>;
/**
 * One piece of evidence an answer cites, by its owning record.
 *
 * @openapiSchema SearchAnswerCitation
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema SearchAnswerParagraphSchema
 * @usedBySchema SearchAnswerSchema
 * @contractShape search.answer-citation
 * @contractRole canonical
 */
export declare const SearchAnswerCitationSchema: z.ZodType<SearchAnswerCitationDefinition>;
export type SearchAnswerCitation = z.infer<typeof SearchAnswerCitationSchema>;
export {};
//# sourceMappingURL=answer-citation.d.ts.map