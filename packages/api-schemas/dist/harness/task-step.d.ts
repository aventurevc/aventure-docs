import { z } from "zod/v4";
declare const HarnessTaskStepSchemaDefinition: z.ZodObject<{
    instruction: z.ZodString;
    operationId: z.ZodString;
    stepKey: z.ZodString;
}, z.core.$strip>;
type HarnessTaskStepDefinition = z.infer<typeof HarnessTaskStepSchemaDefinition>;
/**
 * One ordered task step: its key, instruction, and the operation that runs it.
 *
 * @openapiSchema HarnessTaskStep
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanStepSchema
 * @contractShape harness.task-step
 * @contractRole canonical
 */
export declare const HarnessTaskStepSchema: z.ZodType<HarnessTaskStepDefinition>;
export type HarnessTaskStep = z.infer<typeof HarnessTaskStepSchema>;
export {};
//# sourceMappingURL=task-step.d.ts.map