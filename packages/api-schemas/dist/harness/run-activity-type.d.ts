import { z } from "zod/v4";
/**
 * Reader-facing activity category
 *
 * @openapiSchema HarnessRunActivityType
 * @endpoint GET /v1/research/runs/{runId}/events
 * @usedBySchema HarnessRunActivitySchema
 * @contractShape harness.run-activity-type
 * @contractRole canonical
 */
export declare const HarnessRunActivityTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    CHECK: "CHECK";
    FINISHED: "FINISHED";
    QUEUED: "QUEUED";
    READ: "READ";
    SEARCH: "SEARCH";
    STARTED: "STARTED";
    WRITE: "WRITE";
}>, z.ZodString]> & {
    enum: {
        CHECK: "CHECK";
        FINISHED: "FINISHED";
        QUEUED: "QUEUED";
        READ: "READ";
        SEARCH: "SEARCH";
        STARTED: "STARTED";
        WRITE: "WRITE";
    };
};
export type HarnessRunActivityType = z.infer<typeof HarnessRunActivityTypeSchema>;
//# sourceMappingURL=run-activity-type.d.ts.map