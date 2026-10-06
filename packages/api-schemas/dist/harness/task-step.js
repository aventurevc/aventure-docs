// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskStepSchemaDefinition = z.object({
    /** What this step does, written for the agent that runs it. */
    instruction: z.string(),
    /** OpenAPI operationId this step calls; it must be in the task's operation list. */
    operationId: z.string(),
    /** Step key, unique within its task. */
    stepKey: z.string(),
});
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
export const HarnessTaskStepSchema = HarnessTaskStepSchemaDefinition;
//# sourceMappingURL=task-step.js.map