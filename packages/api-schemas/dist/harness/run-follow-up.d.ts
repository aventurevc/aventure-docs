import { z } from "zod/v4";
/**
 * Follow-up runs this run started, and whether all of them have been filed
 *
 * @openapiSchema HarnessRunFollowUp
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