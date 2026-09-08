import { z } from "zod/v4";
declare const AgentHelpSchemaDefinition: z.ZodObject<{
    answer: z.ZodString;
    citation: z.ZodArray<z.ZodType<{
        excerpt: string;
        sourceId: string;
        sourceType: "COMPLETION_GATE" | "OPERATION" | "PROMPT" | "SKILL";
        sourceVersion?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        excerpt: string;
        sourceId: string;
        sourceType: "COMPLETION_GATE" | "OPERATION" | "PROMPT" | "SKILL";
        sourceVersion?: string | null | undefined;
    }, unknown>>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    recommendedCommand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AgentHelpDefinition = z.infer<typeof AgentHelpSchemaDefinition>;
/**
 * Grounded natural-language help answer with citations to specific operations, skills, or completion gates. Unsupported questions abstain (LOW confidence) rather than guess.
 *
 * @openapiSchema AgentHelp
 * @endpoint POST /v1/agents/help
 * @contractShape agent.help
 * @contractRole canonical
 */
export declare const AgentHelpSchema: z.ZodType<AgentHelpDefinition>;
export type AgentHelp = z.infer<typeof AgentHelpSchema>;
export {};
//# sourceMappingURL=help.d.ts.map