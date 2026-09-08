// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentInstructionKindSchema } from "./instruction-kind.js";
const AgentInstructionSchemaDefinition = z.object({
    /** Document kind */
    kind: AgentInstructionKindSchema,
    /** Manifest name of the instruction document */
    name: z.string(),
    /** Immutable content version (first 12 hex chars of the content sha256) */
    version: z.string(),
});
/**
 * Addressable identity of a versioned agent instruction document.
 *
 * @openapiSchema AgentInstruction
 * @endpoint GET /v1/agents/instructions/{kind}/{name}
 * @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
 * @usedBySchema AgentInstructionDetailSchema
 * @contractShape agent.instruction
 * @contractRole canonical
 */
export const AgentInstructionSchema = AgentInstructionSchemaDefinition;
//# sourceMappingURL=instruction.js.map