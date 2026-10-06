// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskPlanSchema } from "../harness/task-plan.js";
import { HelpCitationSchema } from "./citation.js";
import { HelpResolutionOutcomeSchema } from "./resolution-outcome.js";
/**
 * Resolution of a request to a catalog task or an operation, clarification between candidates, or an abstention.
 *
 * @openapiSchema HelpResolution
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.resolution
 * @contractRole canonical
 */
export const HelpResolutionSchema = z.object({
    /** Candidate operations best first; the options to choose between when the outcome is CLARIFY. */
    candidate: z.array(HelpCitationSchema),
    /** The advised operation; present only for OPERATION_ADVICE. */
    operationId: z.string().nullish(),
    /** Which of the mutually exclusive resolve outcomes was reached. */
    outcome: HelpResolutionOutcomeSchema,
    /** Probability the decision model gave its chosen option (an operation, a task, several, or none); informational, the choice alone decides the outcome. */
    probability: z.number().nullish(),
    /** The chosen catalog task for TASK_PLAN, or the task leading a CLARIFY. */
    taskKey: z.string().nullish(),
    /** The chosen task's plan for TASK_PLAN when the caller may read catalog task plans; absent otherwise. */
    taskPlan: HarnessTaskPlanSchema.nullish(),
});
//# sourceMappingURL=resolution.js.map