import { z } from "zod/v4";
/**
 * Corpus partition a help citation is drawn from.
 *
 * @openapiSchema HelpSourceType
 * @endpoint POST /v1/agents/help
 * @usedBySchema HelpCitationSchema
 * @contractShape help.source-type
 * @contractRole canonical
 */
export declare const HelpSourceTypeSchema: z.ZodEnum<{
    COMPLETION_GATE: "COMPLETION_GATE";
    OPERATION: "OPERATION";
    PROMPT: "PROMPT";
    SKILL: "SKILL";
}>;
export type HelpSourceType = z.infer<typeof HelpSourceTypeSchema>;
//# sourceMappingURL=source-type.d.ts.map