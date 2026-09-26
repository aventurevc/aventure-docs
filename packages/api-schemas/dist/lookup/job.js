// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
import { LookupJobMentionSchema } from "./job-mention.js";
import { LookupJobMutationSchema } from "./job-mutation.js";
const LookupJobSchemaDefinition = z.object({
    /** When the job was requested. */
    createdAt: z.iso.datetime({ offset: true }),
    /** Why the job failed; absent unless state is FAILED. */
    failureReason: z.string().nullish(),
    /** Lookup job id. */
    jobId: z.uuid(),
    /** Each distinct company and person the article names; empty until COMPLETED. */
    mention: z.array(LookupJobMentionSchema),
    /** The article the job reads. */
    source: LookupJobMutationSchema,
    /** Current job state. */
    state: JobStateSchema,
    /** When the job last changed state. */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * An async lookup job's state and, once COMPLETED, every company and person the article names, each identified against stored records.
 *
 * @openapiSchema LookupJob
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @contractShape lookup.job
 * @contractRole canonical
 */
export const LookupJobSchema = LookupJobSchemaDefinition;
//# sourceMappingURL=job.js.map