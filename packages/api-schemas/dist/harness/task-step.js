// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskStepSchemaDefinition = z.object({
    /** What this step does, written for the agent that runs it. */
    instruction: z.string(),
    /** OpenAPI operationId this step calls; it must be in the task's operation list. */
    operationId: z.string(),
    /** Agent-task keys whose plans this step follows instead of restating their steps: the task then owns each named plan's steps, so a write one of them commits counts for this task too. Each must name another planned task; a key may appear once per task and delegations must not loop. */
    planTaskKey: z.array(z.string()).optional(),
    /** Step key, unique within its task. */
    stepKey: z.string().optional(),
    /** Display title for this step, when the catalog supplies one. */
    title: z.string().nullish(),
});
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
export const HarnessTaskStepSchema = HarnessTaskStepSchemaDefinition;
//# sourceMappingURL=task-step.js.map