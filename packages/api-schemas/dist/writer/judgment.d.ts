import { z } from "zod/v4";
declare const WriterJudgmentSchemaDefinition: z.ZodObject<{
    claim: z.ZodArray<z.ZodInt>;
    statement: z.ZodString;
}, z.core.$strip>;
type WriterJudgmentDefinition = z.infer<typeof WriterJudgmentSchemaDefinition>;
export interface WriterJudgmentSchemaInput extends z.input<typeof WriterJudgmentSchemaDefinition> {
}
/**
 * One sourced research judgment.
 *
 * @openapiSchema WriterJudgment
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterAnalysisSectionSchema
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.judgment
 * @contractRole canonical
 */
export declare const WriterJudgmentSchema: z.ZodType<WriterJudgmentDefinition, WriterJudgmentSchemaInput>;
export type WriterJudgment = z.infer<typeof WriterJudgmentSchema>;
export {};
//# sourceMappingURL=judgment.d.ts.map