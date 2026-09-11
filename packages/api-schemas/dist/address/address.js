// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressAssociationSchema } from "./association.js";
import { AddressCitySchema } from "./city.js";
import { AddressCountrySchema } from "./country.js";
import { AddressStateSchema } from "./state.js";
/**
 * Canonical address record for entity and person payloads
 *
 * @openapiSchema Address
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/addresses
 * @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/addresses
 * @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema PersonEnrichmentSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape address.address
 * @contractRole canonical
 */
export const AddressSchema = z.object({
    /** Legacy address row identifier */
    address: z.int().nullish(),
    addressLine1: z.string().nullish(),
    addressLine2: z.string().nullish(),
    /** Role-period associations for this physical address */
    association: z.array(AddressAssociationSchema).optional(),
    /** City reference */
    city: AddressCitySchema.nullish(),
    /** Country reference */
    country: AddressCountrySchema.nullish(),
    countryAbbrev: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Single-line formatted address */
    fullAddress: z.string().nullish(),
    /** Address record identifier */
    id: z.int().nullish(),
    /** Deprecated aggregate compatibility flag; true when any association is current */
    isCurrent: z.boolean().nullish(),
    /** Deprecated legacy flag marking the headquarters or legal/registered address */
    isHq: z.boolean().nullish(),
    /** Deprecated legacy flag marking the primary display address */
    isPrimary: z.boolean().nullish(),
    latitude: z.number().nullish(),
    longitude: z.number().nullish(),
    postalCode: z.string().nullish(),
    /** State or region reference */
    state: AddressStateSchema.nullish(),
    stateAbbrev: z.string().nullish(),
    street: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=address.js.map