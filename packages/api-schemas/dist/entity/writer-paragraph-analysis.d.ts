import { z } from "zod/v4";
/**
 * Overall research answer assignment for entity text.
 *
 * @openapiSchema EntityWriterParagraphAnalysis
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterParagraphSchema
 * @contractShape entity.writer-paragraph-analysis
 * @contractRole canonical
 */
export declare const EntityWriterParagraphAnalysisSchema: z.ZodObject<{
    answer: z.ZodBoolean;
}, z.core.$strip>;
export type EntityWriterParagraphAnalysis = z.infer<typeof EntityWriterParagraphAnalysisSchema>;
//# sourceMappingURL=writer-paragraph-analysis.d.ts.map