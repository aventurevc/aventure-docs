// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HelpScopeSchema } from "../help/scope.js";
const AgentHelpQuestionSchemaDefinition = z.object({
    /** False limits the help corpus to public operations and to catalog tasks whose every step is a public operation, the catalog a public build can run; true requires private-visibility authority; null uses the caller's own visibility. */
    includePrivate: z.boolean().nullish(),
    /** Optional chat model that answers the question; null uses the configured default. A caller without admin authority may only choose an allowlisted model; an ineligible model is rejected with 422. Admin callers are unrestricted. */
    model: z.string().nullish(),
    /** The question to answer, in natural language. */
    question: z.string().max(2000),
    /** True selects a catalog task or recommends an operation instead of composing an answer. Outcomes are TASK_PLAN, OPERATION_ADVICE, CLARIFY, or ABSTAIN. Resolve uses retrieval and a model decision, ignores model, and draws on its own per-caller limit instead of the answer quota. */
    resolve: z.boolean().optional(),
    /** Optional scope restricting which operations the answer may recommend; null means all. */
    scope: HelpScopeSchema.nullish(),
});
/**
 * A natural-language question about how to operate the platform, answered from the operation catalog, agent skills, and completion gates.
 *
 * @openapiSchema AgentHelpQuestion
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @contractShape agent.help-question
 * @contractRole canonical
 */
export const AgentHelpQuestionSchema = AgentHelpQuestionSchemaDefinition;
//# sourceMappingURL=help-question.js.map