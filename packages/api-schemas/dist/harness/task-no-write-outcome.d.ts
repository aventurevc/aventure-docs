import { z } from "zod/v4";
/**
 * NO_LEADS: the source held no accepted lead and the run attempted no write. ALREADY_PRESENT: each accepted lead is already present, proved by its owning read or a required create answering 409; the run committed no mutation. UNRESOLVED: a lead's identity stayed unresolved after a committed lookup read, with a stated reason.
 *
 * @openapiSchema HarnessTaskNoWriteOutcome
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task-no-write-outcome
 * @contractRole canonical
 */
export declare const HarnessTaskNoWriteOutcomeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ALREADY_PRESENT: "ALREADY_PRESENT";
    NO_LEADS: "NO_LEADS";
    UNRESOLVED: "UNRESOLVED";
}>, z.ZodString]> & {
    enum: {
        ALREADY_PRESENT: "ALREADY_PRESENT";
        NO_LEADS: "NO_LEADS";
        UNRESOLVED: "UNRESOLVED";
    };
};
export type HarnessTaskNoWriteOutcome = z.infer<typeof HarnessTaskNoWriteOutcomeSchema>;
//# sourceMappingURL=task-no-write-outcome.d.ts.map