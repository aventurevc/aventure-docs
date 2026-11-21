// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobStateSchemaKnownMembers = z.enum([
    "PENDING",
    "RUNNING",
    "COMPLETED",
    "FAILED",
    "CANCELED",
    "UNKNOWN",
]);
/**
 * Shared lifecycle states for async jobs (duplicate-check, logo-audit, etc.)
 *
 * @openapiSchema JobState
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @usedBySchema LookupJobSchema
 * @contractShape job.state
 * @contractRole canonical
 */
export const JobStateSchema = Object.assign(z.union([JobStateSchemaKnownMembers, z.string()]), {
    enum: JobStateSchemaKnownMembers.enum,
});
//# sourceMappingURL=state.js.map