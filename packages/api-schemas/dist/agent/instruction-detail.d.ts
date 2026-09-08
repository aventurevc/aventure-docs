import { z } from "zod/v4";
declare const AgentInstructionDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodString;
    core: z.ZodType<{
        kind: "AGENT" | "PROMPT" | "SKILL";
        name: string;
        version: string;
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "AGENT" | "PROMPT" | "SKILL";
        name: string;
        version: string;
    }, unknown>>;
}, z.core.$strip>;
type AgentInstructionDetailDefinition = z.infer<typeof AgentInstructionDetailSchemaDefinition>;
/**
 * A resolved agent instruction document: its identity plus the markdown content.
 *
 * @openapiSchema AgentInstructionDetail
 * @endpoint GET /v1/agents/instructions/{kind}/{name}
 * @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
 * @contractShape agent.instruction-detail
 * @contractRole canonical
 */
export declare const AgentInstructionDetailSchema: z.ZodType<AgentInstructionDetailDefinition>;
export type AgentInstructionDetail = z.infer<typeof AgentInstructionDetailSchema>;
export {};
//# sourceMappingURL=instruction-detail.d.ts.map