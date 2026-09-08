// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HelpScopeSchema } from "../help/scope.js";
const AgentHelpQuestionSchemaDefinition = z.object({
    /** Optional chat model that answers the question; null uses the configured default. A CLIENT_SECRET (non-admin) caller may only choose a client-secret-eligible model (owned by app.inference.client-secret-eligible-chat-model); an ineligible model is rejected with 422. Admin keys are unrestricted. */
    model: z.string().nullish(),
    /** The question to answer, in natural language. */
    question: z.string().min(1),
    /** Optional scope restricting which operations the answer may recommend; null means all. */
    scope: HelpScopeSchema.nullish(),
});
/**
 * A natural-language question about how to operate the platform, answered from the operation catalog, agent skills, and completion gates.
 *
 * @openapiSchema AgentHelpQuestion
 * @endpoint POST /v1/agents/help
 * @contractShape agent.help-question
 * @contractRole canonical
 */
export const AgentHelpQuestionSchema = AgentHelpQuestionSchemaDefinition;
//# sourceMappingURL=help-question.js.map