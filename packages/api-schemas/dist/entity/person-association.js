// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EntityImageSchema } from "./image.js";
import { EntityTypeSchema } from "./type.js";
import { EntityUrlLinkSchema } from "./url-link.js";
import { PersonImageSchema } from "../person/image.js";
/**
 * One entity↔person association, naming both sides
 *
 * @openapiSchema EntityPersonAssociation
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape entity.person-association
 * @contractRole canonical
 */
export const EntityPersonAssociationSchema = z.object({
    /** Integer person-entity association join row id, not a person or entity UUID */
    associationId: z.int(),
    /** Association period end, preserving source precision; any value means the association ended and isCurrent is false. Absent only while not terminated */
    endDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** The entity's addresses. Person detail includes at most one: the entity's current headquarters, else its most recently updated current address; GET /v1/entities/{entityId}/addresses lists them all */
    entityAddress: z.array(AddressSchema),
    /** Associated entity id */
    entityId: z.uuid(),
    /** False while the entity profile is unpublished: show name unlinked */
    entityIsPublic: z.boolean().nullish(),
    /** The entity's logo fields. */
    entityLogo: EntityImageSchema,
    entityName: z.string().nullish(),
    entityOperatingStatus: z.string().nullish(),
    /** Lowercase URL slug that identifies the record. */
    entitySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Entity type classification */
    entityType: EntityTypeSchema.nullish(),
    /** The entity's URL links. */
    entityUrlLink: z.array(EntityUrlLinkSchema),
    /** True only while the association has no endDate; any endDate means it ended */
    isCurrent: z.boolean().nullish(),
    /** The person's addresses. */
    personAddress: z.array(AddressSchema),
    /** Associated person id */
    personId: z.uuid(),
    /** The person's image fields. */
    personImage: PersonImageSchema,
    personName: z.string(),
    /** Lowercase URL slug that identifies the record. */
    personSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** The person's URL links. */
    personUrlLink: z.array(EntityUrlLinkSchema),
    score: z.int().nullish(),
    /** Association period start, preserving source precision */
    startDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Job function of the title (read-only). */
    titleFunction: z.string().nullish(),
    /** Corporate title id for the association row */
    titleId: z.int().nullish(),
    /** Seniority level of the title (read-only). */
    titleLevel: z.string().nullish(),
    /** Job title text for this role (read-only). */
    titleName: z.string().nullish(),
});
//# sourceMappingURL=person-association.js.map