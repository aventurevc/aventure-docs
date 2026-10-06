// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Outcome of a resolve request.
 *
 * @openapiSchema HelpResolutionOutcome
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpResolutionSchema
 * @contractShape help.resolution-outcome
 * @contractRole canonical
 */
export const HelpResolutionOutcomeSchema = z.enum([
    "TASK_PLAN",
    "OPERATION_ADVICE",
    "CLARIFY",
    "ABSTAIN",
]);
//# sourceMappingURL=resolution-outcome.js.map