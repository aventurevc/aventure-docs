// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentSuggestionSchemaDefinition = z.object({
    /** Short button text naming the company and its news hook. */
    label: z.string(),
    /** Question sent to the research agent when the button is tapped. */
    question: z.string(),
});
/**
 * One suggested Agent-tab question: the button label plus the question sent when tapped.
 *
 * @openapiSchema AgentSuggestion
 * @endpoint GET /v1/agent/suggestions
 * @usedBySchema AgentSuggestionListSchema
 * @contractShape agent.suggestion
 * @contractRole canonical
 */
export const AgentSuggestionSchema = AgentSuggestionSchemaDefinition;
//# sourceMappingURL=suggestion.js.map