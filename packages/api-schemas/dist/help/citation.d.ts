import { z } from "zod/v4";
declare const HelpCitationSchemaDefinition: z.ZodObject<{
    excerpt: z.ZodString;
    sourceId: z.ZodString;
    sourceType: z.ZodUnion<readonly [z.ZodEnum<{
        COMPLETION_GATE: "COMPLETION_GATE";
        OPERATION: "OPERATION";
        PROMPT: "PROMPT";
        RESEARCH_DETAIL_TYPE: "RESEARCH_DETAIL_TYPE";
        RESEARCH_SNIPPET_TYPE: "RESEARCH_SNIPPET_TYPE";
        SKILL: "SKILL";
        TEXT_TYPE: "TEXT_TYPE";
    }>, z.ZodString]>;
    sourceVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HelpCitationDefinition = z.infer<typeof HelpCitationSchemaDefinition>;
/**
 * A single corpus document the help answer is grounded in.
 *
 * @openapiSchema HelpCitation
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema AgentHelpSchema
 * @usedBySchema HelpResolutionSchema
 * @contractShape help.citation
 * @contractRole canonical
 */
export declare const HelpCitationSchema: z.ZodType<HelpCitationDefinition>;
export type HelpCitation = z.infer<typeof HelpCitationSchema>;
export {};
//# sourceMappingURL=citation.d.ts.map