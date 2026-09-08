import { z } from "zod/v4";
declare const AgentInstructionManifestSchemaDefinition: z.ZodObject<{
    agent: z.ZodRecord<z.ZodString, z.ZodType<{
        key: string;
        version: string;
    }, unknown, z.core.$ZodTypeInternals<{
        key: string;
        version: string;
    }, unknown>>>;
    prompt: z.ZodRecord<z.ZodString, z.ZodType<{
        key: string;
        version: string;
    }, unknown, z.core.$ZodTypeInternals<{
        key: string;
        version: string;
    }, unknown>>>;
    skill: z.ZodRecord<z.ZodString, z.ZodType<{
        key: string;
        version: string;
    }, unknown, z.core.$ZodTypeInternals<{
        key: string;
        version: string;
    }, unknown>>>;
}, z.core.$strip>;
type AgentInstructionManifestDefinition = z.infer<typeof AgentInstructionManifestSchemaDefinition>;
/**
 * Latest-pointer manifest at agents/manifest.json; written last by the sync pipeline.
 *
 * @openapiSchema AgentInstructionManifest
 * @endpoint GET /v1/agents/instructions/manifest
 * @contractShape agent.instruction-manifest
 * @contractRole canonical
 */
export declare const AgentInstructionManifestSchema: z.ZodType<AgentInstructionManifestDefinition>;
export type AgentInstructionManifest = z.infer<typeof AgentInstructionManifestSchema>;
export {};
//# sourceMappingURL=instruction-manifest.d.ts.map