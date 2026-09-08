import { z } from "zod/v4";
declare const HelpCitationSchemaDefinition: z.ZodObject<{
    excerpt: z.ZodString;
    sourceId: z.ZodString;
    sourceType: z.ZodEnum<{
        COMPLETION_GATE: "COMPLETION_GATE";
        OPERATION: "OPERATION";
        PROMPT: "PROMPT";
        SKILL: "SKILL";
    }>;
    sourceVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HelpCitationDefinition = z.infer<typeof HelpCitationSchemaDefinition>;
/**
 * A single corpus document the help answer is grounded in.
 *
 * @openapiSchema HelpCitation
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.citation
 * @contractRole canonical
 */
export declare const HelpCitationSchema: z.ZodType<HelpCitationDefinition>;
export type HelpCitation = z.infer<typeof HelpCitationSchema>;
export {};
//# sourceMappingURL=citation.d.ts.map