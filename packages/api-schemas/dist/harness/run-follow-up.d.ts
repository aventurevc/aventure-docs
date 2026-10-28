import { z } from "zod/v4";
/**
 * Durable completion barrier and direct child run ids
 *
 * @openapiSchema HarnessRunFollowUp
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run-follow-up
 * @contractRole canonical
 */
export declare const HarnessRunFollowUpSchema: z.ZodObject<{
    admission: z.ZodEnum<{
        PENDING: "PENDING";
        REJECTED: "REJECTED";
        SETTLED: "SETTLED";
        UNTRACKED: "UNTRACKED";
    }>;
    hasMore: z.ZodBoolean;
    runId: z.ZodArray<z.ZodUUID>;
}, z.core.$strip>;
export type HarnessRunFollowUp = z.infer<typeof HarnessRunFollowUpSchema>;
//# sourceMappingURL=run-follow-up.d.ts.map