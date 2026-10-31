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
 * @usedBySchema LookupSourceReadSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape job.enqueue
 * @contractRole canonical
 */
export declare const JobEnqueueSchema: z.ZodObject<{
    deduped: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    jobId: z.ZodUUID;
    mode: z.ZodString;
    statusUrl: z.ZodString;
}, z.core.$strip>;
export type JobEnqueue = z.infer<typeof JobEnqueueSchema>;
//# sourceMappingURL=enqueue.d.ts.map