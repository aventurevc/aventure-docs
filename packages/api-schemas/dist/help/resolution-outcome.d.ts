import { z } from "zod/v4";
/**
 * Outcome of a resolve request.
 *
 * @openapiSchema HelpResolutionOutcome
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpResolutionSchema
 * @contractShape help.resolution-outcome
 * @contractRole canonical
 */
export declare const HelpResolutionOutcomeSchema: z.ZodEnum<{
    ABSTAIN: "ABSTAIN";
    CLARIFY: "CLARIFY";
    OPERATION_ADVICE: "OPERATION_ADVICE";
    TASK_PLAN: "TASK_PLAN";
}>;
export type HelpResolutionOutcome = z.infer<typeof HelpResolutionOutcomeSchema>;
//# sourceMappingURL=resolution-outcome.d.ts.map