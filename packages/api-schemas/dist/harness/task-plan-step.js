// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskStepSchema } from "./task-step.js";
import { HarnessTaskWriteGuidanceSchema } from "./task-write-guidance.js";
const HarnessTaskPlanStepSchemaDefinition = z.object({
    /** CLI command path that runs the step's operation; the caller supplies required flags. */
    cliCommand: z.string(),
    /** MCP tool that runs the step's operation; null for CLI-only operations. Supply arguments matching the tool's schema. */
    mcpTool: z.string().nullish(),
    /** The stored step. */
    step: HarnessTaskStepSchema,
    /** What the server expects of the prose this step writes, derived from the operation's judged prose type when the plan is read; null when the step writes no judged prose. */
    writeGuidance: HarnessTaskWriteGuidanceSchema.nullish(),
});
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
export const HarnessTaskPlanStepSchema = HarnessTaskPlanStepSchemaDefinition;
//# sourceMappingURL=task-plan-step.js.map