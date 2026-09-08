import { z } from "zod/v4";
declare const AgentInstructionSchemaDefinition: z.ZodObject<{
    kind: z.ZodEnum<{
        AGENT: "AGENT";
        PROMPT: "PROMPT";
        SKILL: "SKILL";
    }>;
    name: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
type AgentInstructionDefinition = z.infer<typeof AgentInstructionSchemaDefinition>;
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
export declare const AgentInstructionSchema: z.ZodType<AgentInstructionDefinition>;
export type AgentInstruction = z.infer<typeof AgentInstructionSchema>;
export {};
//# sourceMappingURL=instruction.d.ts.map