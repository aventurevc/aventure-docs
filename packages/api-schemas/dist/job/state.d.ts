import { z } from "zod/v4";
/**
 * Shared lifecycle states for async jobs (duplicate-check, logo-audit, etc.)
 *
 * @openapiSchema JobState
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @usedBySchema LookupJobSchema
 * @contractShape job.state
 * @contractRole canonical
 */
export declare const JobStateSchema: z.ZodEnum<{
    CANCELED: "CANCELED";
    COMPLETED: "COMPLETED";
    FAILED: "FAILED";
    PENDING: "PENDING";
    RUNNING: "RUNNING";
    UNKNOWN: "UNKNOWN";
}>;
export type JobState = z.infer<typeof JobStateSchema>;
//# sourceMappingURL=state.d.ts.map