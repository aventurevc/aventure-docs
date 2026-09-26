// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const JobStateSchema = z.enum([
    "PENDING",
    "RUNNING",
    "COMPLETED",
    "FAILED",
    "CANCELED",
    "UNKNOWN",
]);
//# sourceMappingURL=state.js.map