// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobEnqueueSchema } from "../job/enqueue.js";
import { LookupSourceReadPhaseSchema } from "./source-read-phase.js";
/**
 * Publisher context and honest reading activity for a shared-article lookup.
 *
 * @openapiSchema LookupSourceRead
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.source-read
 * @contractRole canonical
 */
export const LookupSourceReadSchema = z.object({
    /** A committed durable lookup to follow; only its presence permits a promise to leave and return. Follow its status URL with the same caller's bearer, honoring Retry-After. */
    continuation: JobEnqueueSchema.nullish(),
    faviconUrl: z.string().nullish(),
    logoUrl: z.string().nullish(),
    /** Informational messages to cycle within this stage, never evidence of completed work. */
    message: z.array(z.string()),
    /** Measured reference p95 in milliseconds; no slow-state claim when absent. */
    p95Ms: z.number().int().nullish(),
    phase: LookupSourceReadPhaseSchema,
    publication: z.string(),
});
//# sourceMappingURL=source-read.js.map