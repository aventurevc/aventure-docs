// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskInputTypeSchema } from "./task-input-type.js";
const HarnessTaskSchemaDefinition = z.object({
    /** Optional exact literal accepted for a TEXT input; when present, the run and its mutation guard require this value instead of accepting an arbitrary string. */
    allowedValue: z.string().nullish(),
    /** What the value is, written for the caller that supplies it. */
    description: z.string(),
    /** Input key, unique within its task. */
    key: z.string(),
    /** Whether this input must be bound before admission. Defaults to true; an omitted optional input stays unbound and is never inferred from the prompt. */
    required: z.boolean().default(true).optional(),
    /** How the value is bound. */
    type: HarnessTaskInputTypeSchema,
});
/**
 * One typed task input, required unless explicitly marked optional.
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