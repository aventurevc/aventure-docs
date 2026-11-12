import { z } from "zod/v4";
/**
 * Finished entity-text research analysis and section-free paragraph plan.
 *
 * @openapiSchema EntityWriterBrief
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessTaskInputBindingSchema
 * @contractShape entity.writer-brief
 * @contractRole canonical
 */
export declare const EntityWriterBriefSchema: z.ZodObject<{
    claim: z.ZodArray<z.ZodType<{
        end?: number | null | undefined;
        evidenceView?: string | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement?: string | undefined;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
        end?: number | null | undefined;
        evidenceView?: string | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement?: string | undefined;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput>>>;
    metaAnalysis: z.ZodType<{
        answer: {
            claim: number[];
            statement: string;
        };
        asOfDate: string;
        changeSignal: {
            claim: number[];
            statement: string;
        }[];
        gap: {
            claim: number[];
            reason: string;
            statement: string;
        }[];
        question: string;
        scope: {
            boundary: string;
            geography?: string | null | undefined;
            period?: string | null | undefined;
        };
    }, import("./writer-meta-analysis.ts").EntityWriterMetaAnalysisSchemaInput, z.core.$ZodTypeInternals<{
        answer: {
            claim: number[];
            statement: string;
        };
        asOfDate: string;
        changeSignal: {
            claim: number[];
            statement: string;
        }[];
        gap: {
            claim: number[];
            reason: string;
            statement: string;
        }[];
        question: string;
        scope: {
            boundary: string;
            geography?: string | null | undefined;
            period?: string | null | undefined;
        };
    }, import("./writer-meta-analysis.ts").EntityWriterMetaAnalysisSchemaInput>>;
    outputClaim: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    paragraph: z.ZodArray<z.ZodType<{
        analysis: {
            answer: boolean;
        };
        claim: number[];
        positioning: string[];
    }, import("./writer-paragraph.ts").EntityWriterParagraphSchemaInput, z.core.$ZodTypeInternals<{
        analysis: {
            answer: boolean;
        };
        claim: number[];
        positioning: string[];
    }, import("./writer-paragraph.ts").EntityWriterParagraphSchemaInput>>>;
    positioning: z.ZodArray<z.ZodType<{
        claim: number[];
        element: string;
        statement: string;
    }, import("../writer/positioning.ts").WriterPositioningSchemaInput, z.core.$ZodTypeInternals<{
        claim: number[];
        element: string;
        statement: string;
    }, import("../writer/positioning.ts").WriterPositioningSchemaInput>>>;
}, z.core.$strip>;
export type EntityWriterBrief = z.infer<typeof EntityWriterBriefSchema>;
//# sourceMappingURL=writer-brief.d.ts.map