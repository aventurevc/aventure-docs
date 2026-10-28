import { z } from "zod/v4";
declare const EntityAnalysisSectionMutationSchemaDefinition: z.ZodObject<{
    citation: z.ZodArray<z.ZodType<{
        quote: string;
        sourceDocumentId: string;
    }, import("./analysis-citation.ts").EntityAnalysisCitationSchemaInput, z.core.$ZodTypeInternals<{
        quote: string;
        sourceDocumentId: string;
    }, import("./analysis-citation.ts").EntityAnalysisCitationSchemaInput>>>;
    figure: z.ZodOptional<z.ZodArray<z.ZodType<{
        column?: string[] | undefined;
        entry: {
            cell: {
                citation: number;
                excerpt: string;
            }[];
            label: string;
        }[];
        title: string;
        type: string;
    }, import("./analysis-figure.ts").EntityAnalysisFigureSchemaInput, z.core.$ZodTypeInternals<{
        column?: string[] | undefined;
        entry: {
            cell: {
                citation: number;
                excerpt: string;
            }[];
            label: string;
        }[];
        title: string;
        type: string;
    }, import("./analysis-figure.ts").EntityAnalysisFigureSchemaInput>>>>;
    key: z.ZodString;
    origin: z.ZodUnion<readonly [z.ZodEnum<{
        AGENT: "AGENT";
        USER: "USER";
    }>, z.ZodString]> & {
        enum: {
            AGENT: "AGENT";
            USER: "USER";
        };
    };
    paragraph: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        label?: string | null | undefined;
        text: string;
    }, import("./analysis-paragraph.ts").EntityAnalysisParagraphSchemaInput, z.core.$ZodTypeInternals<{
        label?: string | null | undefined;
        text: string;
    }, import("./analysis-paragraph.ts").EntityAnalysisParagraphSchemaInput>>>>>;
    title: z.ZodString;
    writerBrief: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        claim: z.ZodArray<z.ZodType<{
            gateId?: string | null | undefined;
            quote: string;
            sourceUrl: string;
            statement: string;
            writerSurface?: string | null | undefined;
        }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
            gateId?: string | null | undefined;
            quote: string;
            sourceUrl: string;
            statement: string;
            writerSurface?: string | null | undefined;
        }, import("../research/finding.ts").ResearchFindingSchemaInput>>>;
        metaAnalysis: z.ZodOptional<z.ZodObject<{
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
            section: z.ZodArray<z.ZodType<{
                judgment: {
                    claim: number[];
                    statement: string;
                };
                label: string;
            }, import("../writer/analysis-section.ts").WriterAnalysisSectionSchemaInput, z.core.$ZodTypeInternals<{
                judgment: {
                    claim: number[];
                    statement: string;
                };
                label: string;
            }, import("../writer/analysis-section.ts").WriterAnalysisSectionSchemaInput>>>;
        }, z.core.$strip>>;
        outputClaim: z.ZodOptional<z.ZodArray<z.ZodInt>>;
        paragraph: z.ZodArray<z.ZodType<{
            analysis?: {
                answer: boolean;
                section: string[];
            } | undefined;
            claim: number[];
            positioning?: string[] | undefined;
        }, import("../writer/paragraph.ts").WriterParagraphSchemaInput, z.core.$ZodTypeInternals<{
            analysis?: {
                answer: boolean;
                section: string[];
            } | undefined;
            claim: number[];
            positioning?: string[] | undefined;
        }, import("../writer/paragraph.ts").WriterParagraphSchemaInput>>>;
        positioning: z.ZodArray<z.ZodType<{
            claim: number[];
            element: string;
            statement: string;
        }, import("../writer/positioning.ts").WriterPositioningSchemaInput, z.core.$ZodTypeInternals<{
            claim: number[];
            element: string;
            statement: string;
        }, import("../writer/positioning.ts").WriterPositioningSchemaInput>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type EntityAnalysisSectionMutationDefinition = z.infer<typeof EntityAnalysisSectionMutationSchemaDefinition>;
export interface EntityAnalysisSectionMutationSchemaInput extends z.input<typeof EntityAnalysisSectionMutationSchemaDefinition> {
}
/**
 * Replace a private analysis section with paragraphs or a finished writer brief.
 *
 * @openapiSchema EntityAnalysisSectionMutation
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @contractShape entity.analysis-section-mutation
 * @contractRole canonical
 */
export declare const EntityAnalysisSectionMutationSchema: z.ZodType<EntityAnalysisSectionMutationDefinition, EntityAnalysisSectionMutationSchemaInput>;
export type EntityAnalysisSectionMutation = z.infer<typeof EntityAnalysisSectionMutationSchema>;
export {};
//# sourceMappingURL=analysis-section-mutation.d.ts.map