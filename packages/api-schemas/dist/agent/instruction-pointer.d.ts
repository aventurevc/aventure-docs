import { z } from "zod/v4";
declare const AgentInstructionPointerSchemaDefinition: z.ZodObject<{
    key: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
type AgentInstructionPointerDefinition = z.infer<typeof AgentInstructionPointerSchemaDefinition>;
/**
 * One manifest entry: immutable version id and the full object key it resolves to.
 *
 * @openapiSchema AgentInstructionPointer
 * @endpoint GET /v1/agents/instructions/manifest
 * @usedBySchema AgentInstructionManifestSchema
 * @contractShape agent.instruction-pointer
 * @contractRole canonical
 */
export declare const AgentInstructionPointerSchema: z.ZodType<AgentInstructionPointerDefinition>;
export type AgentInstructionPointer = z.infer<typeof AgentInstructionPointerSchema>;
export {};
//# sourceMappingURL=instruction-pointer.d.ts.map