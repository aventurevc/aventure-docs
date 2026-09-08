// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentInstructionPointerSchema } from "./instruction-pointer.js";
const AgentInstructionManifestSchemaDefinition = z.object({
    /** Sub-agent name to current version pointer */
    agent: z.record(z.string(), AgentInstructionPointerSchema),
    /** Prompt name to current version pointer */
    prompt: z.record(z.string(), AgentInstructionPointerSchema),
    /** Skill name to current version pointer */
    skill: z.record(z.string(), AgentInstructionPointerSchema),
});
/**
 * Latest-pointer manifest at agents/manifest.json; written last by the sync pipeline.
 *
 * @openapiSchema AgentInstructionManifest
 * @endpoint GET /v1/agents/instructions/manifest
 * @contractShape agent.instruction-manifest
 * @contractRole canonical
 */
export const AgentInstructionManifestSchema = AgentInstructionManifestSchemaDefinition;
//# sourceMappingURL=instruction-manifest.js.map