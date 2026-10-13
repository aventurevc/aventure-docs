import { z } from "zod/v4";
declare const HarnessTaskPlanStepSchemaDefinition: z.ZodObject<{
    cliCommand: z.ZodString;
    mcpTool: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    step: z.ZodType<{
        instruction: string;
        operationId: string;
        stepKey: string;
    }, import("./task-step.ts").HarnessTaskStepSchemaInput, z.core.$ZodTypeInternals<{
        instruction: string;
        operationId: string;
        stepKey: string;
    }, import("./task-step.ts").HarnessTaskStepSchemaInput>>;
    writeGuidance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        body: z.ZodString;
        expectation: z.ZodString;
        method: z.ZodArray<z.ZodString>;
        override: z.ZodString;
        reject: z.ZodArray<z.ZodString>;
        typeCatalog: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type HarnessTaskPlanStepDefinition = z.infer<typeof HarnessTaskPlanStepSchemaDefinition>;
export interface HarnessTaskPlanStepSchemaInput extends z.input<typeof HarnessTaskPlanStepSchemaDefinition> {
}
/**
 * One task step with the CLI command and MCP tool that run its operation.
 *
 * @openapiSchema HarnessTaskPlanStep
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task-plan-step
 * @contractRole canonical
 */
export declare const HarnessTaskPlanStepSchema: z.ZodType<HarnessTaskPlanStepDefinition, HarnessTaskPlanStepSchemaInput>;
export type HarnessTaskPlanStep = z.infer<typeof HarnessTaskPlanStepSchema>;
export {};
//# sourceMappingURL=task-plan-step.d.ts.map