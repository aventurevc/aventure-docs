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
export declare const AgentInstructionKindSchema: z.ZodEnum<{
    AGENT: "AGENT";
    PROMPT: "PROMPT";
    SKILL: "SKILL";
}>;
export type AgentInstructionKind = z.infer<typeof AgentInstructionKindSchema>;
//# sourceMappingURL=instruction-kind.d.ts.map