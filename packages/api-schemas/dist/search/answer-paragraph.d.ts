import { z } from "zod/v4";
declare const SearchAnswerParagraphSchemaDefinition: z.ZodObject<{
    citation: z.ZodArray<z.ZodType<{
        entityId: string;
        source: string;
        sourceId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        source: string;
        sourceId: string;
    }, unknown>>>;
    text: z.ZodString;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchAnswerParagraphDefinition = z.infer<typeof SearchAnswerParagraphSchemaDefinition>;
/**
 * One paragraph of an answer and the evidence it rests on.
 *
 * @openapiSchema SearchAnswerParagraph
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerSchema
 * @contractShape search.answer-paragraph
 * @contractRole canonical
 */
export declare const SearchAnswerParagraphSchema: z.ZodType<SearchAnswerParagraphDefinition>;
export type SearchAnswerParagraph = z.infer<typeof SearchAnswerParagraphSchema>;
export {};
//# sourceMappingURL=answer-paragraph.d.ts.map