// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LookupMentionSchema } from "./mention.js";
const LookupJobMutationSchemaDefinition = z.object({
    /** POST /v1/lookup-mentions only: the companies and people a caller already read from a page or screenshot it keeps on its device, identified without either being sent. Send it alone, without sourceUrl, sourceNewsId, or a file. Any signed-in user may send it, with or without a plan. */
    mention: z.array(LookupMentionSchema).optional(),
    /** aVenture news id of the article; an id that names no stored article is an error. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article; read from aVenture news when stored there, otherwise fetched. */
    sourceUrl: z.string().max(2000).nullish(),
});
/**
 * The article whose companies and people a lookup job identifies. Send sourceUrl, sourceNewsId, or both; POST /v1/lookup-mentions also takes mention instead.
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