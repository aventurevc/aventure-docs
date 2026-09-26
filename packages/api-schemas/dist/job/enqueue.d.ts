import { z } from "zod/v4";
declare const JobEnqueueSchemaDefinition: z.ZodObject<{
    jobId: z.ZodUUID;
    mode: z.ZodString;
    statusUrl: z.ZodString;
}, z.core.$strip>;
type JobEnqueueDefinition = z.infer<typeof JobEnqueueSchemaDefinition>;
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint POST /v1/lookup-jobs
 * @contractShape job.enqueue
 * @contractRole canonical
 */
export declare const JobEnqueueSchema: z.ZodType<JobEnqueueDefinition>;
export type JobEnqueue = z.infer<typeof JobEnqueueSchema>;
export {};
//# sourceMappingURL=enqueue.d.ts.map