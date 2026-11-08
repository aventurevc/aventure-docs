// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/research/runs/{runId}/draft/sections/{sectionKey}/writes/{writeId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup/mentions
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema IdentificationSchema
 * @usedBySchema LookupSourceReadSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape job.enqueue
 * @contractRole canonical
 */
export const JobEnqueueSchema = z.object({
    /** `true` when an earlier run answers this request instead of a new one; absent on routes that do not report deduplication. */
    deduped: z.boolean().nullish(),
    jobId: z.uuid(),
    /** Longest the accepted background write may run, in seconds, so a caller knows how long to keep polling `statusUrl`; absent on jobs that state no runtime. */
    maxRuntimeSeconds: z.number().int().nullish(),
    mode: z.string(),
    /** Endpoint to poll for asynchronous job state and result. */
    statusUrl: z.string(),
});
//# sourceMappingURL=enqueue.js.map