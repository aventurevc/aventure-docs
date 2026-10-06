// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskPlanStepSchema } from "./task-plan-step.js";
import { HarnessTaskSchema } from "./task.js";
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
export const HarnessTaskPlanSchema = z.object({
    /** Stored catalog revision this plan was read from. */
    catalogRevision: z.int(),
    /** Typed inputs the task needs before it runs. */
    input: z.array(HarnessTaskSchema),
    /** Steps in run order; an empty list means this catalog task is unplanned. */
    step: z.array(HarnessTaskPlanStepSchema),
    /** Agent-task catalog key. */
    taskKey: z.string(),
});
//# sourceMappingURL=task-plan.js.map