import { z } from "zod/v4";
declare const HarnessTaskStepSchemaDefinition: z.ZodObject<{
    instruction: z.ZodString;
    operationId: z.ZodString;
    planTaskKey: z.ZodOptional<z.ZodArray<z.ZodString>>;
    stepKey: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessTaskStepDefinition = z.infer<typeof HarnessTaskStepSchemaDefinition>;
export interface HarnessTaskStepSchemaInput extends z.input<typeof HarnessTaskStepSchemaDefinition> {
}
/**
 * One ordered task step: its key, instruction, the operation that runs it, and the delegated plans it follows.
 *
 * @openapiSchema HarnessTaskStep
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanStepSchema
 * @contractShape harness.task-step
 * @contractRole canonical
 */
export declare const HarnessTaskStepSchema: z.ZodType<HarnessTaskStepDefinition, HarnessTaskStepSchemaInput>;
export type HarnessTaskStep = z.infer<typeof HarnessTaskStepSchema>;
export {};
//# sourceMappingURL=task-step.d.ts.map