// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { HelpCitationSchema } from "../help/citation.js";
const AgentHelpSchemaDefinition = z.object({
    /** Answer drawn only from the cited corpus; abstains when unsupported. */
    answer: z.string(),
    /** Corpus evidence backing the answer; empty when the model abstains. */
    citation: z.array(HelpCitationSchema),
    /** Confidence the answer is fully supported by the cited corpus. LOW signals an abstention. */
    confidence: ConfidenceSchema,
    /** Canonical CLI/MCP/API command the asker should run, when one is supported by the cited corpus; null when no single command applies or the model abstains. */
    recommendedCommand: z.string().nullish(),
});
/**
 * Grounded natural-language help answer with citations to specific operations, skills, or completion gates. Unsupported questions abstain (LOW confidence) rather than guess.
 *
 * @openapiSchema AgentHelp
 * @endpoint POST /v1/agents/help
 * @contractShape agent.help
 * @contractRole canonical
 */
export const AgentHelpSchema = AgentHelpSchemaDefinition;
//# sourceMappingURL=help.js.map