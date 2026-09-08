// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Kinds of agent instruction documents stored under the agents/ prefix.
 *
 * @openapiSchema AgentInstructionKind
 * @endpoint GET /v1/agents/instructions/{kind}/{name}
 * @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
 * @usedBySchema AgentInstructionSchema
 * @contractShape agent.instruction-kind
 * @contractRole canonical
 */
export const AgentInstructionKindSchema = z.enum(["PROMPT", "SKILL", "AGENT"]);
//# sourceMappingURL=instruction-kind.js.map