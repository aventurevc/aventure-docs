import { z } from "zod/v4";
declare const AgentSuggestionListSchemaDefinition: z.ZodObject<{
    suggestion: z.ZodArray<z.ZodType<{
        label: string;
        question: string;
    }, import("./suggestion.ts").AgentSuggestionSchemaInput, z.core.$ZodTypeInternals<{
        label: string;
        question: string;
    }, import("./suggestion.ts").AgentSuggestionSchemaInput>>>;
}, z.core.$strip>;
type AgentSuggestionListDefinition = z.infer<typeof AgentSuggestionListSchemaDefinition>;
export interface AgentSuggestionListSchemaInput extends z.input<typeof AgentSuggestionListSchemaDefinition> {
}
/**
 * Prepared suggested-question buttons for the Agent tab. Empty when no recent public funding or news records qualify.
 *
 * @openapiSchema AgentSuggestionList
 * @endpoint GET /v1/agent/suggestions
 * @contractShape agent.suggestion-list
 * @contractRole canonical
 */
export declare const AgentSuggestionListSchema: z.ZodType<AgentSuggestionListDefinition, AgentSuggestionListSchemaInput>;
export type AgentSuggestionList = z.infer<typeof AgentSuggestionListSchema>;
export {};
//# sourceMappingURL=suggestion-list.d.ts.map