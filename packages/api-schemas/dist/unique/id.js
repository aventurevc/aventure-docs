// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { UniqueIdListingStandingSchema } from "./id-listing-standing.js";
import { UniqueIdTypeSchema } from "./id-type.js";
const UniqueIdSchemaDefinition = z.object({
    /** Row creation timestamp. */
    createdAt: z.iso.datetime({ offset: true }),
    /** Source-stated beginning of this ticker assignment at supplied precision. */
    effectiveFrom: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Source-stated end of this assignment; null does not mean current. */
    effectiveTo: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Unique-id row id. */
    id: z.int(),
    /** Identifier value as issued by the registry (normalized per type). */
    identifier: z.string(),
    /** Identifier type. */
    idType: UniqueIdTypeSchema,
    /** Listing-specific source assertion, not entity ownership or operating status. */
    listingStanding: UniqueIdListingStandingSchema.nullish(),
    /** Owning entity or person id; exactly one nested id is present. */
    owner: EntityPersonOwnerSchema,
    /** Source-stated ticker share class; unknown absent. */
    shareClass: z.string().nullish(),
    /** Attribution source label for the mapping, when recorded. */
    source: z.string().nullish(),
    /** Source-effective date of the standing assertion at supplied precision. */
    standingAsOf: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Row update timestamp. */
    updatedAt: z.iso.datetime({ offset: true }),
    /** Source-stated ticker venue; exact spelling, unknown absent. */
    venue: z.string().nullish(),
});
/**
 * External identifier mapped to one owner (entity or person): for example a company's EIN, SEC CIK, or ticker symbol. Owner carries exactly one entityId or personId.
 *
 * @openapiSchema UniqueId
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageUniqueIdSchema
 * @contractShape unique.id
 * @contractRole canonical
 */
export const UniqueIdSchema = UniqueIdSchemaDefinition;
//# sourceMappingURL=id.js.map