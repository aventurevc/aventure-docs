import { z } from "zod/v4";
declare const NewsAnalysisSectionSchemaDefinition: z.ZodObject<{
    reference: z.ZodArray<z.ZodType<{
        quote: string;
        sourceDocumentId?: string | null | undefined;
        url: string;
    }, import("./analysis-source-reference.ts").NewsAnalysisSourceReferenceSchemaInput, z.core.$ZodTypeInternals<{
        quote: string;
        sourceDocumentId?: string | null | undefined;
        url: string;
    }, import("./analysis-source-reference.ts").NewsAnalysisSourceReferenceSchemaInput>>>;
    stepKey: z.ZodString;
    text: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>;
type NewsAnalysisSectionDefinition = z.infer<typeof NewsAnalysisSectionSchemaDefinition>;
export interface NewsAnalysisSectionSchemaInput extends z.input<typeof NewsAnalysisSectionSchemaDefinition> {
}
/**
 * One accepted analysis step and its cited interpretation.
 *
 * @openapiSchema NewsAnalysisSection
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsAnalysisSchema
 * @contractShape news.analysis-section
 * @contractRole canonical
 */
export declare const NewsAnalysisSectionSchema: z.ZodType<NewsAnalysisSectionDefinition, NewsAnalysisSectionSchemaInput>;
export type NewsAnalysisSection = z.infer<typeof NewsAnalysisSectionSchema>;
export {};
//# sourceMappingURL=analysis-section.d.ts.map