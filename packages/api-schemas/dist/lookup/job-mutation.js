// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LookupMentionSchema } from "./mention.js";
const LookupJobMutationSchemaDefinition = z.object({
    /** Companies and people the caller already read, identified without sending the page or screenshot. Send them alone, without an article or file. On lookup jobs, maxNames is required and no shell records or enrichment are scheduled. */
    mention: z.array(LookupMentionSchema).optional(),
    /** aVenture news id of the article; an id that names no stored article is an error. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article; read from aVenture news when stored there, otherwise fetched. */
    sourceUrl: z.string().max(2000).nullish(),
});
/**
 * The article whose companies and people a lookup identifies. Send sourceUrl, sourceNewsId, or both; lookup-only bulk jobs and POST /v1/lookup-mentions also accept mention instead.
 *
 * @openapiSchema LookupJobMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mutation
 * @contractRole canonical
 */
export const LookupJobMutationSchema = LookupJobMutationSchemaDefinition;
//# sourceMappingURL=job-mutation.js.map