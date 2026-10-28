import { z } from "zod/v4";
declare const AgentHelpSchemaDefinition: z.ZodObject<{
    answer: z.ZodString;
    citation: z.ZodArray<z.ZodType<{
        billingAccess?: "DAILY_ALLOWANCE" | "PAID_PLAN" | null | undefined;
        excerpt: string;
        sourceId: string;
        sourceType: string;
        sourceVersion?: string | null | undefined;
    }, import("../help/citation.ts").HelpCitationSchemaInput, z.core.$ZodTypeInternals<{
        billingAccess?: "DAILY_ALLOWANCE" | "PAID_PLAN" | null | undefined;
        excerpt: string;
        sourceId: string;
        sourceType: string;
        sourceVersion?: string | null | undefined;
    }, import("../help/citation.ts").HelpCitationSchemaInput>>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    resolution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        candidate: z.ZodArray<z.ZodType<{
            billingAccess?: "DAILY_ALLOWANCE" | "PAID_PLAN" | null | undefined;
            excerpt: string;
            sourceId: string;
            sourceType: string;
            sourceVersion?: string | null | undefined;
        }, import("../help/citation.ts").HelpCitationSchemaInput, z.core.$ZodTypeInternals<{
            billingAccess?: "DAILY_ALLOWANCE" | "PAID_PLAN" | null | undefined;
            excerpt: string;
            sourceId: string;
            sourceType: string;
            sourceVersion?: string | null | undefined;
        }, import("../help/citation.ts").HelpCitationSchemaInput>>>;
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
            catalogRevision: z.ZodOptional<z.ZodInt>;
            gateId: z.ZodOptional<z.ZodArray<z.ZodString>>;
            input: z.ZodArray<z.ZodType<{
                allowedValue?: string | null | undefined;
                description: string;
                key: string;
                required?: boolean | undefined;
                type: string;
            }, import("../harness/task.ts").HarnessTaskSchemaInput, z.core.$ZodTypeInternals<{
                allowedValue?: string | null | undefined;
                description: string;
                key: string;
                required?: boolean | undefined;
                type: string;
            }, import("../harness/task.ts").HarnessTaskSchemaInput>>>;
            step: z.ZodArray<z.ZodType<{
                cliCommand: string;
                mcpTool?: string | null | undefined;
                step: {
                    instruction: string;
                    operationId: string;
                    planTaskKey?: string[] | undefined;
                    stepKey?: string | undefined;
                    title?: string | null | undefined;
                };
                title?: string | null | undefined;
                writeGuidance?: {
                    body: string;
                    expectation: string;
                    method: string[];
                    override: string;
                    reject: string[];
                    typeCatalog: string;
                } | null | undefined;
            }, import("../harness/task-plan-step.ts").HarnessTaskPlanStepSchemaInput, z.core.$ZodTypeInternals<{
                cliCommand: string;
                mcpTool?: string | null | undefined;
                step: {
                    instruction: string;
                    operationId: string;
                    planTaskKey?: string[] | undefined;
                    stepKey?: string | undefined;
                    title?: string | null | undefined;
                };
                title?: string | null | undefined;
                writeGuidance?: {
                    body: string;
                    expectation: string;
                    method: string[];
                    override: string;
                    reject: string[];
                    typeCatalog: string;
                } | null | undefined;
            }, import("../harness/task-plan-step.ts").HarnessTaskPlanStepSchemaInput>>>;
            taskKey: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type AgentHelpDefinition = z.infer<typeof AgentHelpSchemaDefinition>;
export interface AgentHelpSchemaInput extends z.input<typeof AgentHelpSchemaDefinition> {
}
/**
 * Help answer with citations to the operations it draws on. Unsupported questions abstain (LOW confidence) rather than guess.
 *
 * @openapiSchema AgentHelp
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @contractShape agent.help
 * @contractRole canonical
 */
export declare const AgentHelpSchema: z.ZodType<AgentHelpDefinition, AgentHelpSchemaInput>;
export type AgentHelp = z.infer<typeof AgentHelpSchema>;
export {};
//# sourceMappingURL=help.d.ts.map