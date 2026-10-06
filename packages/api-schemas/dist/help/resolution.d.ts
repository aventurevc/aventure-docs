import { z } from "zod/v4";
/**
 * Resolution of a request to a catalog task or an operation, clarification between candidates, or an abstention.
 *
 * @openapiSchema HelpResolution
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.resolution
 * @contractRole canonical
 */
export declare const HelpResolutionSchema: z.ZodObject<{
    candidate: z.ZodArray<z.ZodType<{
        excerpt: string;
        sourceId: string;
        sourceType: "COMPLETION_GATE" | "OPERATION" | "PROMPT" | "RESEARCH_DETAIL_TYPE" | "SKILL";
        sourceVersion?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        excerpt: string;
        sourceId: string;
        sourceType: "COMPLETION_GATE" | "OPERATION" | "PROMPT" | "RESEARCH_DETAIL_TYPE" | "SKILL";
        sourceVersion?: string | null | undefined;
    }, unknown>>>;
    operationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodEnum<{
        ABSTAIN: "ABSTAIN";
        CLARIFY: "CLARIFY";
        OPERATION_ADVICE: "OPERATION_ADVICE";
        TASK_PLAN: "TASK_PLAN";
    }>;
    probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    taskKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type HelpResolution = z.infer<typeof HelpResolutionSchema>;
//# sourceMappingURL=resolution.d.ts.map