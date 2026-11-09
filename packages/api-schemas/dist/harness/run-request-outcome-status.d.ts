import { z } from "zod/v4";
/**
 * written, alreadyPresent, refuted (a cited page contradicts it), removed (the run deleted its target record), or notWritten (fails the request gate)
 *
 * @openapiSchema HarnessRunRequestOutcomeStatus
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunRequestOutcomeSchema
 * @contractShape harness.run-request-outcome-status
 * @contractRole canonical
 */
export declare const HarnessRunRequestOutcomeStatusSchema: z.ZodUnion<readonly [z.ZodEnum<{
    alreadyPresent: "alreadyPresent";
    notWritten: "notWritten";
    refuted: "refuted";
    removed: "removed";
    written: "written";
}>, z.ZodString]> & {
    enum: {
        alreadyPresent: "alreadyPresent";
        notWritten: "notWritten";
        refuted: "refuted";
        removed: "removed";
        written: "written";
    };
};
export type HarnessRunRequestOutcomeStatus = z.infer<typeof HarnessRunRequestOutcomeStatusSchema>;
//# sourceMappingURL=run-request-outcome-status.d.ts.map