import { z } from "zod/v4";
declare const EntityWriterMetaAnalysisSchemaDefinition: z.ZodObject<{
    answer: z.ZodType<{
        claim: number[];
        statement: string;
    }, import("../writer/judgment.ts").WriterJudgmentSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        statement: string;
    }, import("../writer/judgment.ts").WriterJudgmentSchemaInput>>;
    asOfDate: z.ZodISODate;
    changeSignal: z.ZodArray<z.ZodType<{
        claim: number[];
        statement: string;
    }, import("../writer/change-signal.ts").WriterChangeSignalSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        statement: string;
    }, import("../writer/change-signal.ts").WriterChangeSignalSchemaInput>>>;
    gap: z.ZodArray<z.ZodType<{
        claim: number[];
        reason: string;
        statement: string;
    }, import("../writer/gap.ts").WriterGapSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        reason: string;
        statement: string;
    }, import("../writer/gap.ts").WriterGapSchemaInput>>>;
    question: z.ZodString;
    scope: z.ZodType<{
        boundary: string;
        geography?: string | null | undefined;
        period?: string | null | undefined;
    }, import("../writer/scope.ts").WriterScopeSchemaInput, z.core.$ZodTypeInternals<{
        boundary: string;
        geography?: string | null | undefined;
        period?: string | null | undefined;
    }, import("../writer/scope.ts").WriterScopeSchemaInput>>;
}, z.core.$strip>;
type EntityWriterMetaAnalysisDefinition = z.infer<typeof EntityWriterMetaAnalysisSchemaDefinition>;
export interface EntityWriterMetaAnalysisSchemaInput extends z.input<typeof EntityWriterMetaAnalysisSchemaDefinition> {
}
/**
 * Entity-text research judgment without framework sections.
 *
 * @openapiSchema EntityWriterMetaAnalysis
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterBriefSchema
 * @contractShape entity.writer-meta-analysis
 * @contractRole canonical
 */
export declare const EntityWriterMetaAnalysisSchema: z.ZodType<EntityWriterMetaAnalysisDefinition, EntityWriterMetaAnalysisSchemaInput>;
export type EntityWriterMetaAnalysis = z.infer<typeof EntityWriterMetaAnalysisSchema>;
export {};
//# sourceMappingURL=writer-meta-analysis.d.ts.map