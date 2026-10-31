import { z } from "zod/v4";
declare const HarnessRunCreateSchemaDefinition: z.ZodObject<{
    finding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
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
    }, import("../research/finding.ts").ResearchFindingSchemaInput>>>>>;
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskInput: z.ZodOptional<z.ZodArray<z.ZodType<{
        entityId?: string | null | undefined;
        fact?: {
            eventDate?: string | null | undefined;
            sourceUrl: string;
            statement: string;
        } | null | undefined;
        key?: string | null | undefined;
        newsId?: number | null | undefined;
        text?: string | null | undefined;
        writerBrief?: {
            claim: {
                end?: number | null | undefined;
                gateId?: string | null | undefined;
                quote?: string | undefined;
                sourceDocumentId?: string | null | undefined;
                sourceUrl: string;
                start?: number | null | undefined;
                statement?: string | undefined;
                writerSurface?: string | null | undefined;
            }[];
            metaAnalysis?: {
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
                section: {
                    judgment: {
                        claim: number[];
                        statement: string;
                    };
                    label: string;
                }[];
            } | undefined;
            outputClaim?: number[] | undefined;
            paragraph: {
                analysis?: {
                    answer: boolean;
                    section: string[];
                } | undefined;
                claim: number[];
                positioning?: string[] | undefined;
            }[];
            positioning: {
                claim: number[];
                element: string;
                statement: string;
            }[];
        } | null | undefined;
    }, import("./task-input-binding.ts").HarnessTaskInputBindingSchemaInput, z.core.$ZodTypeInternals<{
        entityId?: string | null | undefined;
        fact?: {
            eventDate?: string | null | undefined;
            sourceUrl: string;
            statement: string;
        } | null | undefined;
        key?: string | null | undefined;
        newsId?: number | null | undefined;
        text?: string | null | undefined;
        writerBrief?: {
            claim: {
                end?: number | null | undefined;
                gateId?: string | null | undefined;
                quote?: string | undefined;
                sourceDocumentId?: string | null | undefined;
                sourceUrl: string;
                start?: number | null | undefined;
                statement?: string | undefined;
                writerSurface?: string | null | undefined;
            }[];
            metaAnalysis?: {
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
                section: {
                    judgment: {
                        claim: number[];
                        statement: string;
                    };
                    label: string;
                }[];
            } | undefined;
            outputClaim?: number[] | undefined;
            paragraph: {
                analysis?: {
                    answer: boolean;
                    section: string[];
                } | undefined;
                claim: number[];
                positioning?: string[] | undefined;
            }[];
            positioning: {
                claim: number[];
                element: string;
                statement: string;
            }[];
        } | null | undefined;
    }, import("./task-input-binding.ts").HarnessTaskInputBindingSchemaInput>>>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    url: z.ZodString;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunCreateDefinition = z.infer<typeof HarnessRunCreateSchemaDefinition>;
export interface HarnessRunCreateSchemaInput extends z.input<typeof HarnessRunCreateSchemaDefinition> {
}
/**
 * Request one research run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 */
export declare const HarnessRunCreateSchema: z.ZodType<HarnessRunCreateDefinition, HarnessRunCreateSchemaInput>;
export type HarnessRunCreate = z.infer<typeof HarnessRunCreateSchema>;
export {};
//# sourceMappingURL=run-create.d.ts.map