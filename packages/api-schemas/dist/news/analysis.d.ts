import { z } from "zod/v4";
/**
 * The current shared, publicly readable article analysis.
 *
 * @openapiSchema NewsAnalysis
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsDetailSchema
 * @contractShape news.analysis
 * @contractRole canonical
 */
export declare const NewsAnalysisSchema: z.ZodObject<{
    newsId: z.ZodInt;
    publishedAt: z.ZodISODateTime;
    section: z.ZodArray<z.ZodType<{
        reference: {
            quote: string;
            sourceDocumentId?: string | null | undefined;
            url: string;
        }[];
        stepKey: string;
        text: string;
        title: string;
    }, import("./analysis-section.ts").NewsAnalysisSectionSchemaInput, z.core.$ZodTypeInternals<{
        reference: {
            quote: string;
            sourceDocumentId?: string | null | undefined;
            url: string;
        }[];
        stepKey: string;
        text: string;
        title: string;
    }, import("./analysis-section.ts").NewsAnalysisSectionSchemaInput>>>;
    version: z.ZodInt;
}, z.core.$strip>;
export type NewsAnalysis = z.infer<typeof NewsAnalysisSchema>;
//# sourceMappingURL=analysis.d.ts.map