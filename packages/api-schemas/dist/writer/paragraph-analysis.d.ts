import { z } from "zod/v4";
/**
 * Meta-analysis judgments assigned to one paragraph.
 *
 * @openapiSchema WriterParagraphAnalysis
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterParagraphSchema
 * @contractShape writer.paragraph-analysis
 * @contractRole canonical
 */
export declare const WriterParagraphAnalysisSchema: z.ZodObject<{
    answer: z.ZodBoolean;
    section: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type WriterParagraphAnalysis = z.infer<typeof WriterParagraphAnalysisSchema>;
//# sourceMappingURL=paragraph-analysis.d.ts.map