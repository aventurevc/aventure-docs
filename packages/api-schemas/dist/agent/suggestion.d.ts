import { z } from "zod/v4";
declare const AgentSuggestionSchemaDefinition: z.ZodObject<{
    label: z.ZodString;
    question: z.ZodString;
}, z.core.$strip>;
type AgentSuggestionDefinition = z.infer<typeof AgentSuggestionSchemaDefinition>;
export interface AgentSuggestionSchemaInput extends z.input<typeof AgentSuggestionSchemaDefinition> {
}
/**
 * One suggested Agent-tab question: the button label plus the question sent when tapped.
 *
 * @openapiSchema AgentSuggestion
 * @endpoint GET /v1/agent/suggestions
 * @usedBySchema AgentSuggestionListSchema
 * @contractShape agent.suggestion
 * @contractRole canonical
 */
export declare const AgentSuggestionSchema: z.ZodType<AgentSuggestionDefinition, AgentSuggestionSchemaInput>;
export type AgentSuggestion = z.infer<typeof AgentSuggestionSchema>;
export {};
//# sourceMappingURL=suggestion.d.ts.map