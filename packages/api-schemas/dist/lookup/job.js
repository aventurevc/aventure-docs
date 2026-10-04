// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { IdentificationSchema } from "../identification/identification.js";
import { JobStateSchema } from "../job/state.js";
import { LookupJobMentionSchema } from "./job-mention.js";
import { LookupJobMutationSchema } from "./job-mutation.js";
const LookupJobSchemaDefinition = z.object({
    /** When the job was requested. */
    createdAt: z.iso.datetime({ offset: true }),
    /** Why the job failed; absent unless state is FAILED. */
    failureReason: z.string().nullish(),
    /** Subject jobs only: once COMPLETED, the identification GET /v1/lookup or POST /v1/entities/lookup returns for source.subject; absent otherwise. */
    identification: IdentificationSchema.nullish(),
    /** Lookup job id. */
    jobId: z.uuid(),
    /** True when a bulk lookup returned its name bound; more names may remain. False does not prove that extraction found every name on a page. */
    limitReached: z.boolean(),
    /** Bulk lookup name bound; absent for legacy article jobs. */
    maxNames: z.int().nullish(),
    /** Each identified company and person; bulk results are available while running. */
    mention: z.array(LookupJobMentionSchema),
    /** Distinct names found for a bulk lookup; absent on standard jobs. */
    namesFound: z.int().nullish(),
    /** Names processed so far, including per-name failures. */
    namesProcessed: z.int(),
    /** The article the job reads or names supplied for a bulk lookup. */
    source: LookupJobMutationSchema,
    /** Current job state. */
    state: JobStateSchema,
    /** When the job last changed state. */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * An async lookup job's state and, once COMPLETED, identified companies and people from its article or supplied names, or the identification of its subject.
 *
 * @openapiSchema LookupJob
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @contractShape lookup.job
 * @contractRole canonical
 */
export const LookupJobSchema = LookupJobSchemaDefinition;
//# sourceMappingURL=job.js.map