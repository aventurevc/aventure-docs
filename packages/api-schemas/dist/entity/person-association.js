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
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape entity.person-association
 * @contractRole canonical
 */
export const EntityPersonAssociationSchema = z.object({
    /** Integer person-entity association join row id, not a person or entity UUID */
    associationId: z.int(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Association creator label */
    creator: z.string().nullish(),
    /** Association period end timestamp */
    endDate: z.iso.datetime({ offset: true }).nullish(),
    /** Entity addresses carried on the association projection */
    entityAddress: z.array(AddressSchema),
    /** Associated entity id */
    entityId: z.uuid(),
    /** Entity logo image projection */
    entityLogo: EntityImageSchema,
    entityName: z.string().nullish(),
    entityOperatingStatus: z.string().nullish(),
    /** Canonical lowercase URL slug for the resource */
    entitySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Entity type classification */
    entityType: EntityTypeSchema.nullish(),
    /** Entity URL links carried on the association projection */
    entityUrlLink: z.array(EntityUrlLinkSchema),
    isCurrent: z.boolean().nullish(),
    /** Person addresses carried on the association projection */
    personAddress: z.array(AddressSchema),
    /** Associated person id */
    personId: z.uuid(),
    /** Person image projection */
    personImage: PersonImageSchema,
    personName: z.string(),
    /** Canonical lowercase URL slug for the resource */
    personSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Person URL links carried on the association projection */
    personUrlLink: z.array(EntityUrlLinkSchema),
    score: z.int().nullish(),
    /** Association period start timestamp */
    startDate: z.iso.datetime({ offset: true }).nullish(),
    /** Read-side corporate title function for the association row */
    titleFunction: z.string().nullish(),
    /** Corporate title id for the association row */
    titleId: z.int().nullish(),
    /** Read-side corporate title level for the association row */
    titleLevel: z.string().nullish(),
    /** Read-side corporate title text for the association row */
    titleName: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=person-association.js.map