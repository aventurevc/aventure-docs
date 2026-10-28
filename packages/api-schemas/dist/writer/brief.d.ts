import { z } from "zod/v4";
/**
 * Finished research analysis for a governed prose write. The writer may phrase only the selected output claims and supplied judgments.
 *
 * @openapiSchema WriterBrief
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionMutationSchema
 * @contractShape writer.brief
 * @contractRole canonical
 */
export declare const WriterBriefSchema: z.ZodObject<{
    claim: z.ZodArray<z.ZodType<{
        end?: number | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement: string;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
        end?: number | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement: string;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput>>>;
    metaAnalysis: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    outputClaim: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    paragraph: z.ZodArray<z.ZodType<{
        analysis?: {
            answer: boolean;
            section: string[];
        } | undefined;
        claim: number[];
        positioning?: string[] | undefined;
    }, import("./paragraph.ts").WriterParagraphSchemaInput, z.core.$ZodTypeInternals<{
        analysis?: {
            answer: boolean;
            section: string[];
        } | undefined;
        claim: number[];
        positioning?: string[] | undefined;
    }, import("./paragraph.ts").WriterParagraphSchemaInput>>>;
    positioning: z.ZodArray<z.ZodType<{
        claim: number[];
        element: string;
        statement: string;
    }, import("./positioning.ts").WriterPositioningSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        element: string;
        statement: string;
    }, import("./positioning.ts").WriterPositioningSchemaInput>>>;
}, z.core.$strip>;
export type WriterBrief = z.infer<typeof WriterBriefSchema>;
//# sourceMappingURL=brief.d.ts.map