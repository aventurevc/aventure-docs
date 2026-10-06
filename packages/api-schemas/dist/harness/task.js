// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskInputTypeSchema } from "./task-input-type.js";
const HarnessTaskSchemaDefinition = z.object({
    /** What the value is, written for the caller that supplies it. */
    description: z.string(),
    /** Input key, unique within its task. */
    key: z.string(),
    /** How the value is bound. */
    type: HarnessTaskInputTypeSchema,
});
/**
 * One typed task input that must be bound before a run starts.
 *
 * @openapiSchema HarnessTaskInput
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task
 * @contractRole canonical
 */
export const HarnessTaskSchema = HarnessTaskSchemaDefinition;
//# sourceMappingURL=task.js.map