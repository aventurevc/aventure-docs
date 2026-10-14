// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HelpScopeSchema } from "../help/scope.js";
const AgentHelpQuestionSchemaDefinition = z.object({
    /** Optional supported model for the answer. Omit it to use the default; an unsupported model answers 422. */
    model: z.string().nullish(),
    /** The question to answer, in natural language. */
    question: z.string().max(2000),
    /** True recommends the operation or workflow that does what the question asks, or asks a clarifying question, instead of writing an answer. It ignores model and has its own per-account limit. */
    resolve: z.boolean().optional(),
    /** Optional scope restricting which operations the answer may recommend; null means all. */
    scope: HelpScopeSchema.nullish(),
});
/**
 * A plain-English question about how to use aVenture, answered with references to the operations that do it.
 *
 * @openapiSchema AgentHelpQuestion
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @contractShape agent.help-question
 * @contractRole canonical
 */
export const AgentHelpQuestionSchema = AgentHelpQuestionSchemaDefinition;
//# sourceMappingURL=help-question.js.map