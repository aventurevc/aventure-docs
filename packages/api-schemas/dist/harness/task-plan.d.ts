import { z } from "zod/v4";
/**
 * One catalog task's typed inputs and ordered steps with derived CLI commands and MCP tools, read from the stated catalog revision.
 *
 * @openapiSchema HarnessTaskPlan
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpResolutionSchema
 * @contractShape harness.task-plan
 * @contractRole canonical
 */
export declare const HarnessTaskPlanSchema: z.ZodObject<{
    catalogRevision: z.ZodOptional<z.ZodInt>;
    gateId: z.ZodOptional<z.ZodArray<z.ZodString>>;
    input: z.ZodArray<z.ZodType<{
        allowedValue?: string | null | undefined;
        description: string;
        key: string;
        required?: boolean | undefined;
        type: string;
    }, import("./task.ts").HarnessTaskSchemaInput, z.core.$ZodTypeInternals<{
        allowedValue?: string | null | undefined;
        description: string;
        key: string;
        required?: boolean | undefined;
        type: string;
    }, import("./task.ts").HarnessTaskSchemaInput>>>;
    step: z.ZodArray<z.ZodType<{
        cliCommand: string;
        mcpTool?: string | null | undefined;
        step: {
            instruction: string;
            operationId: string;
            planTaskKey?: string[] | undefined;
            stepKey?: string | undefined;
        };
        writeGuidance?: {
            body: string;
            expectation: string;
            method: string[];
            override: string;
            reject: string[];
            typeCatalog: string;
        } | null | undefined;
    }, import("./task-plan-step.ts").HarnessTaskPlanStepSchemaInput, z.core.$ZodTypeInternals<{
        cliCommand: string;
        mcpTool?: string | null | undefined;
        step: {
            instruction: string;
            operationId: string;
            planTaskKey?: string[] | undefined;
            stepKey?: string | undefined;
        };
        writeGuidance?: {
            body: string;
            expectation: string;
            method: string[];
            override: string;
            reject: string[];
            typeCatalog: string;
        } | null | undefined;
    }, import("./task-plan-step.ts").HarnessTaskPlanStepSchemaInput>>>;
    taskKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type HarnessTaskPlan = z.infer<typeof HarnessTaskPlanSchema>;
//# sourceMappingURL=task-plan.d.ts.map