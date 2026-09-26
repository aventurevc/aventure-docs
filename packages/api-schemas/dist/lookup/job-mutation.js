// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LookupJobMutationSchemaDefinition = z.object({
    /** aVenture news id of the article; an unknown id fails the job. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article; read from aVenture news when stored there, otherwise fetched. */
    sourceUrl: z.string().max(2000).nullish(),
});
/**
 * The article whose companies and people a lookup job identifies. Send sourceUrl, sourceNewsId, or both.
 *
 * @openapiSchema LookupJobMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mutation
 * @contractRole canonical
 */
export const LookupJobMutationSchema = LookupJobMutationSchemaDefinition;
//# sourceMappingURL=job-mutation.js.map