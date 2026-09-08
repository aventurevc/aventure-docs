// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentInstructionSchema } from "./instruction.js";
const AgentInstructionDetailSchemaDefinition = z.object({
    /** Markdown document content */
    content: z.string(),
    /** Addressable identity of the document */
    core: AgentInstructionSchema,
});
/**
 * A resolved agent instruction document: its identity plus the markdown content.
 *
 * @openapiSchema AgentInstructionDetail
 * @endpoint GET /v1/agents/instructions/{kind}/{name}
 * @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
 * @contractShape agent.instruction-detail
 * @contractRole canonical
 */
export const AgentInstructionDetailSchema = AgentInstructionDetailSchemaDefinition;
//# sourceMappingURL=instruction-detail.js.map