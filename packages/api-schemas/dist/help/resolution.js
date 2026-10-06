// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HelpCitationSchema } from "./citation.js";
import { HelpResolutionOutcomeSchema } from "./resolution-outcome.js";
/**
 * Resolution of a request to one operation: advice naming it, a clarification between candidates, or an abstention.
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
    /** Probability the decision model gave the chosen option (an operation, or none). */
    probability: z.number().nullish(),
    /** The chosen catalog task; present only for TASK_PLAN. getHarnessTaskPlan reads its plan. */
    taskKey: z.string().nullish(),
});
//# sourceMappingURL=resolution.js.map