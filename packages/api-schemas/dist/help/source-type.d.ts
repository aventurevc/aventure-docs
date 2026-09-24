import { z } from "zod/v4";
/**
 * Corpus partition a help citation is drawn from.
 *
 * @openapiSchema HelpSourceType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpCitationSchema
 * @contractShape help.source-type
 * @contractRole canonical
 */
export declare const HelpSourceTypeSchema: z.ZodEnum<{
    COMPLETION_GATE: "COMPLETION_GATE";
    OPERATION: "OPERATION";
    PROMPT: "PROMPT";
    RESEARCH_DETAIL_TYPE: "RESEARCH_DETAIL_TYPE";
    SKILL: "SKILL";
}>;
export type HelpSourceType = z.infer<typeof HelpSourceTypeSchema>;
//# sourceMappingURL=source-type.d.ts.map