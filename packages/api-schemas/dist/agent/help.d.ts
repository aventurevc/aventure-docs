import { z } from "zod/v4";
declare const AgentHelpSchemaDefinition: z.ZodObject<{
    answer: z.ZodString;
    citation: z.ZodArray<z.ZodType<{
        excerpt: string;
        sourceId: string;
        sourceType: string;
        sourceVersion?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        excerpt: string;
        sourceId: string;
        sourceType: string;
        sourceVersion?: string | null | undefined;
    }, unknown>>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    resolution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        candidate: z.ZodArray<z.ZodType<{
            excerpt: string;
            sourceId: string;
            sourceType: string;
            sourceVersion?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            excerpt: string;
            sourceId: string;
            sourceType: string;
            sourceVersion?: string | null | undefined;
        }, unknown>>>;
        operationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        outcome: z.ZodEnum<{
            ABSTAIN: "ABSTAIN";
            CLARIFY: "CLARIFY";
            OPERATION_ADVICE: "OPERATION_ADVICE";
            TASK_PLAN: "TASK_PLAN";
        }>;
        probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        taskKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        taskPlan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            catalogRevision: z.ZodInt;
            gateId: z.ZodArray<z.ZodString>;
            input: z.ZodArray<z.ZodType<{
                description: string;
                key: string;
                type: string;
            }, unknown, z.core.$ZodTypeInternals<{
                description: string;
                key: string;
                type: string;
            }, unknown>>>;
            step: z.ZodArray<z.ZodType<{
                cliCommand: string;
                mcpTool?: string | null | undefined;
                step: {
                    instruction: string;
                    operationId: string;
                    stepKey: string;
                };
                writeGuidance?: {
                    body: string;
                    expectation: string;
                    method: string[];
                    override: string;
                    reject: string[];
                    typeCatalog: string;
                } | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                cliCommand: string;
                mcpTool?: string | null | undefined;
                step: {
                    instruction: string;
                    operationId: string;
                    stepKey: string;
                };
                writeGuidance?: {
                    body: string;
                    expectation: string;
                    method: string[];
                    override: string;
                    reject: string[];
                    typeCatalog: string;
                } | null | undefined;
            }, unknown>>>;
            taskKey: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type AgentHelpDefinition = z.infer<typeof AgentHelpSchemaDefinition>;
/**
 * Grounded natural-language help answer with citations to specific operations, skills, or completion gates. Unsupported questions abstain (LOW confidence) rather than guess.
 *
 * @openapiSchema AgentHelp
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @contractShape agent.help
 * @contractRole canonical
 */
export declare const AgentHelpSchema: z.ZodType<AgentHelpDefinition>;
export type AgentHelp = z.infer<typeof AgentHelpSchema>;
export {};
//# sourceMappingURL=help.d.ts.map