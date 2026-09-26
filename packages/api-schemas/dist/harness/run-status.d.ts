import { z } from "zod/v4";
/**
 * Harness run lifecycle state
 *
 * @openapiSchema HarnessRunStatus
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-status
 * @contractRole canonical
 */
export declare const HarnessRunStatusSchema: z.ZodEnum<{
    completed: "completed";
    failed: "failed";
    queued: "queued";
    running: "running";
    stopped: "stopped";
}>;
export type HarnessRunStatus = z.infer<typeof HarnessRunStatusSchema>;
//# sourceMappingURL=run-status.d.ts.map