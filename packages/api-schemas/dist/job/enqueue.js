// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobEnqueueSchemaDefinition = z.object({
    jobId: z.uuid(),
    mode: z.string(),
    /** Endpoint to poll for asynchronous job state and result. */
    statusUrl: z.string(),
});
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint POST /v1/lookup-jobs
 * @contractShape job.enqueue
 * @contractRole canonical
 */
export const JobEnqueueSchema = JobEnqueueSchemaDefinition;
//# sourceMappingURL=enqueue.js.map