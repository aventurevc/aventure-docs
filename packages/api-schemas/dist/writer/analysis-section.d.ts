import { z } from "zod/v4";
declare const WriterAnalysisSectionSchemaDefinition: z.ZodObject<{
    judgment: z.ZodType<{
        claim: number[];
        statement: string;
    }, import("./judgment.ts").WriterJudgmentSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        statement: string;
    }, import("./judgment.ts").WriterJudgmentSchemaInput>>;
    label: z.ZodString;
}, z.core.$strip>;
type WriterAnalysisSectionDefinition = z.infer<typeof WriterAnalysisSectionSchemaDefinition>;
export interface WriterAnalysisSectionSchemaInput extends z.input<typeof WriterAnalysisSectionSchemaDefinition> {
}
/**
 * One ordered framework judgment.
 *
 * @openapiSchema WriterAnalysisSection
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.analysis-section
 * @contractRole canonical
 */
export declare const WriterAnalysisSectionSchema: z.ZodType<WriterAnalysisSectionDefinition, WriterAnalysisSectionSchemaInput>;
export type WriterAnalysisSection = z.infer<typeof WriterAnalysisSectionSchema>;
export {};
//# sourceMappingURL=analysis-section.d.ts.map