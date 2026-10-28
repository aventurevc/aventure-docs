import { z } from "zod/v4";
declare const NewsAnalysisSourceReferenceSchemaDefinition: z.ZodObject<{
    quote: z.ZodString;
    sourceDocumentId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    url: z.ZodString;
}, z.core.$strip>;
type NewsAnalysisSourceReferenceDefinition = z.infer<typeof NewsAnalysisSourceReferenceSchemaDefinition>;
export interface NewsAnalysisSourceReferenceSchemaInput extends z.input<typeof NewsAnalysisSourceReferenceSchemaDefinition> {
}
/**
 * A source supporting the analysis: its URL and a verbatim quote from it.
 *
 * @openapiSchema NewsAnalysisSourceReference
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsAnalysisSectionSchema
 * @contractShape news.analysis-source-reference
 * @contractRole canonical
 */
export declare const NewsAnalysisSourceReferenceSchema: z.ZodType<NewsAnalysisSourceReferenceDefinition, NewsAnalysisSourceReferenceSchemaInput>;
export type NewsAnalysisSourceReference = z.infer<typeof NewsAnalysisSourceReferenceSchema>;
export {};
//# sourceMappingURL=analysis-source-reference.d.ts.map