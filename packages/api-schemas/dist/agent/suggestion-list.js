// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentSuggestionSchema } from "./suggestion.js";
const AgentSuggestionListSchemaDefinition = z.object({
    /** Up to 12 label-and-question pairs, most recent funding first, then recent news. Empty is a normal response, not an error. */
    suggestion: z.array(AgentSuggestionSchema),
});
/**
 * Prepared suggested-question buttons for the Agent tab. Empty when no recent public funding or news records qualify.
 *
 * @openapiSchema AgentSuggestionList
 * @endpoint GET /v1/agent/suggestions
 * @contractShape agent.suggestion-list
 * @contractRole canonical
 */
export const AgentSuggestionListSchema = AgentSuggestionListSchemaDefinition;
//# sourceMappingURL=suggestion-list.js.map