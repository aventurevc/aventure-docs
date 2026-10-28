import { z } from "zod/v4";
/**
 * Research judgment the writer must preserve.
 *
 * @openapiSchema WriterMetaAnalysis
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterBriefSchema
 * @contractShape writer.meta-analysis
 * @contractRole canonical
 */
export declare const WriterMetaAnalysisSchema: z.ZodObject<{
    answer: z.ZodType<{
        claim: number[];
        statement: string;
    }, import("./judgment.ts").WriterJudgmentSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        statement: string;
    }, import("./judgment.ts").WriterJudgmentSchemaInput>>;
    asOfDate: z.ZodISODate;
    changeSignal: z.ZodArray<z.ZodType<{
        claim: number[];
        statement: string;
    }, import("./change-signal.ts").WriterChangeSignalSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        statement: string;
    }, import("./change-signal.ts").WriterChangeSignalSchemaInput>>>;
    gap: z.ZodArray<z.ZodType<{
        claim: number[];
        reason: string;
        statement: string;
    }, import("./gap.ts").WriterGapSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        reason: string;
        statement: string;
    }, import("./gap.ts").WriterGapSchemaInput>>>;
    question: z.ZodString;
    scope: z.ZodType<{
        boundary: string;
        geography?: string | null | undefined;
        period?: string | null | undefined;
    }, import("./scope.ts").WriterScopeSchemaInput, z.core.$ZodTypeInternals<{
        boundary: string;
        geography?: string | null | undefined;
        period?: string | null | undefined;
    }, import("./scope.ts").WriterScopeSchemaInput>>;
    section: z.ZodArray<z.ZodType<{
        judgment: {
            claim: number[];
            statement: string;
        };
        label: string;
    }, import("./analysis-section.ts").WriterAnalysisSectionSchemaInput, z.core.$ZodTypeInternals<{
        judgment: {
            claim: number[];
            statement: string;
        };
        label: string;
    }, import("./analysis-section.ts").WriterAnalysisSectionSchemaInput>>>;
}, z.core.$strip>;
export type WriterMetaAnalysis = z.infer<typeof WriterMetaAnalysisSchema>;
//# sourceMappingURL=meta-analysis.d.ts.map