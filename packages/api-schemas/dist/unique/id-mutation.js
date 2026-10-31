// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UniqueIdListingStandingSchema } from "./id-listing-standing.js";
/**
 * Create or merge-patch an external identifier mapping. Omitted fields preserve existing values; listing qualifiers apply only to entity tickers and remain write-refused during the preserving-reader rollout.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @usedBySchema RegistryFilingSchema
 * @contractShape unique.id-mutation
 * @contractRole canonical
 */
export const UniqueIdMutationSchema = z.object({
    /** Source-stated beginning of the ticker assignment at supplied precision. */
    effectiveFrom: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Source-stated end of the ticker assignment; absence does not mean current. */
    effectiveTo: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Identifier value as issued by the registry. */
    identifier: z.string().nullish(),
    /** Identifier type token, for example ein, secCik, or ticker. */
    idType: z.string().nullish(),
    /** Source-stated listing standing, not entity operating or ownership status. */
    listingStanding: UniqueIdListingStandingSchema.nullish(),
    /** Source-stated ticker share class; never inferred from the symbol. */
    shareClass: z.string().nullish(),
    /** Optional attribution source label for the mapping. */
    source: z.string().nullish(),
    /** Source-effective date of the standing assertion at supplied precision. */
    standingAsOf: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Source-stated ticker venue, retaining exact spelling; unknown is absent. */
    venue: z.string().nullish(),
});
//# sourceMappingURL=id-mutation.js.map