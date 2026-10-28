// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint GET /v1/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape job.enqueue
 * @contractRole canonical
 */
export const JobEnqueueSchema = z.object({
    /** `true` when an earlier run answers this request instead of a new one; absent on routes that do not report deduplication. */
    deduped: z.boolean().nullish(),
    jobId: z.uuid(),
    mode: z.string(),
    /** Endpoint to poll for asynchronous job state and result. */
    statusUrl: z.string(),
});
//# sourceMappingURL=enqueue.js.map