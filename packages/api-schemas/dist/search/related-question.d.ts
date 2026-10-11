import { z } from "zod/v4";
declare const SearchRelatedQuestionSchemaDefinition: z.ZodObject<{
    question: z.ZodString;
    snippet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchRelatedQuestionDefinition = z.infer<typeof SearchRelatedQuestionSchemaDefinition>;
export interface SearchRelatedQuestionSchemaInput extends z.input<typeof SearchRelatedQuestionSchemaDefinition> {
}
/**
 * One "People also ask" question Google shows for the query
 *
 * @openapiSchema SearchRelatedQuestion
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.related-question
 * @contractRole canonical
 */
export declare const SearchRelatedQuestionSchema: z.ZodType<SearchRelatedQuestionDefinition, SearchRelatedQuestionSchemaInput>;
export type SearchRelatedQuestion = z.infer<typeof SearchRelatedQuestionSchema>;
export {};
//# sourceMappingURL=related-question.d.ts.map