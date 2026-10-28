import { z } from "zod/v4";
declare const SearchAnswerWebSourceSchemaDefinition: z.ZodObject<{
    title: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type SearchAnswerWebSourceDefinition = z.infer<typeof SearchAnswerWebSourceSchemaDefinition>;
export interface SearchAnswerWebSourceSchemaInput extends z.input<typeof SearchAnswerWebSourceSchemaDefinition> {
}
/**
 * A web search result an answer paragraph cites, by its page.
 *
 * @openapiSchema SearchAnswerWebSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerParagraphSchema
 * @contractShape search.answer-web-source
 * @contractRole canonical
 */
export declare const SearchAnswerWebSourceSchema: z.ZodType<SearchAnswerWebSourceDefinition, SearchAnswerWebSourceSchemaInput>;
export type SearchAnswerWebSource = z.infer<typeof SearchAnswerWebSourceSchema>;
export {};
//# sourceMappingURL=answer-web-source.d.ts.map