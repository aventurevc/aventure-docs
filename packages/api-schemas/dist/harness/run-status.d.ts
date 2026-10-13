import { z } from "zod/v4";
/**
 * Research run lifecycle state
 *
 * @openapiSchema HarnessRunStatus
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
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