// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Create or update payload for attaching an external identifier to an owner. For PATCH, omitted fields preserve their existing values and source may be explicitly cleared with null.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @contractShape unique.id-mutation
 * @contractRole canonical
 */
export const UniqueIdMutationSchema = z.object({
    /** Identifier value as issued by the registry. */
    identifier: z.string().nullish(),
    /** Identifier type token, for example ein, secCik, or ticker. */
    idType: z.string().nullish(),
    /** Optional attribution source label for the mapping. */
    source: z.string().nullish(),
});
//# sourceMappingURL=id-mutation.js.map