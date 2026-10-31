import { z } from "zod/v4";
declare const HarnessTaskInputBindingSchemaDefinition: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    fact: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        eventDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        sourceUrl: z.ZodString;
        statement: z.ZodString;
    }, z.core.$strip>>>;
    key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    writerBrief: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        claim: z.ZodArray<z.ZodType<{
            end?: number | null | undefined;
            gateId?: string | null | undefined;
            quote?: string | undefined;
            sourceDocumentId?: string | null | undefined;
            sourceUrl: string;
            start?: number | null | undefined;
            statement?: string | undefined;
            writerSurface?: string | null | undefined;
        }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
            end?: number | null | undefined;
            gateId?: string | null | undefined;
            quote?: string | undefined;
            sourceDocumentId?: string | null | undefined;
            sourceUrl: string;
            start?: number | null | undefined;
            statement?: string | undefined;
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
type HarnessTaskInputBindingDefinition = z.infer<typeof HarnessTaskInputBindingSchemaDefinition>;
export interface HarnessTaskInputBindingSchemaInput extends z.input<typeof HarnessTaskInputBindingSchemaDefinition> {
}
/**
 * One task input value bound before the run starts; the server validates its key and type.
 *
 * @openapiSchema HarnessTaskInputBinding
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape harness.task-input-binding
 * @contractRole canonical
 */
export declare const HarnessTaskInputBindingSchema: z.ZodType<HarnessTaskInputBindingDefinition, HarnessTaskInputBindingSchemaInput>;
export type HarnessTaskInputBinding = z.infer<typeof HarnessTaskInputBindingSchema>;
export {};
//# sourceMappingURL=task-input-binding.d.ts.map