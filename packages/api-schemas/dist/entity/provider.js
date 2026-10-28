// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EntitySchema } from "./entity.js";
/**
 * The current entity a fund or product/service is offered by: a fund's manager organization, a product/service's provider, through its current primary edge to a live, listed provider. Null on every other entity type.
 *
 * @openapiSchema EntityProvider
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.provider
 * @contractRole canonical
 */
export const EntityProviderSchema = z.object({
    /** Provider core. Its image is the provider's own logo, else the logo of the provider's current parent entity. */
    entity: EntitySchema,
    /** The provider's current headquarters address. */
    headquarters: AddressSchema.nullish(),
    /** Relationship linking the subject to this provider. */
    relationshipType: z.enum(["fundManagerFirm", "productService"]),
});
//# sourceMappingURL=provider.js.map