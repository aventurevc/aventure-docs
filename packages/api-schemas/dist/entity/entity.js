// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityImageSchema } from "./image.js";
import { EntityNameAliasEntityAliasTypeSchema } from "./name-alias-entity-alias-type.js";
import { EntitySitemapSchema } from "./sitemap.js";
import { EntityTypeSchema } from "./type.js";
/**
 * Flat entity core record — identity, naming, status, image, and source metadata. An entity is our umbrella record for organizations such as companies, funds, investment firms and investors, accelerators, nonprofits, and government agencies, plus products and services connected to those organizations. Returned directly by thin-mode (?mode=thin) and alphabetical (?letter=X) list endpoints. Nested as .core inside EntityList for default list reads and EntityDetail for detail reads.
 *
 * @openapiSchema Entity
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/sitemap-routes
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityAcceleratorParticipationSchema
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @usedBySchema EntityListSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema PageEntitySchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonInvestedCompanySchema
 * @contractShape entity.entity
 * @contractRole canonical
 */
export const EntitySchema = z.object({
    /** Record creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Default currency code (ISO 4217) */
    defaultCurrency: z.string().nullish(),
    /** Year the entity was founded */
    foundedYear: z.int().nullish(),
    /** Unique entity identifier */
    id: z.uuid(),
    /** Logo and monogram image metadata */
    image: EntityImageSchema,
    /** Provenance-grounded last-modified watermark (schema.org dateModified). Advances only when a real, consumer-meaningful data point changes via a recorded provenance event — never on timestamp-only writes, migrations, or index refreshes. Pairs with createdAt (dateCreated) and grounds the sitemap lastmod. */
    lastModifiedAt: z.iso.datetime({ offset: true }).nullish(),
    /** All names this entity has been known by — current alternates, DBAs, former names, and rebrand-source identities. Naming history (e.g. `Metaphor Systems` for the current `Exa` entity) lives here; never as a separate relationship type or `formerName` field. */
    nameAlias: z.array(EntityNameAliasEntityAliasTypeSchema),
    /** Resolved display brand name */
    nameBrand: z.string(),
    /** Registered legal name */
    nameLegal: z.string().nullish(),
    /** Current operating status. Use Acquired Subsidiary when the entity was acquired and still operates; use Closed (Acquihire) when the entity was acquired for its team and shut down, rendering like Closed everywhere; use Acquired only when it is terminal, folded, or closed. */
    operatingStatus: z.string().nullish(),
    /** Stable, immutable public handle (e.g. `eV1StGXR8Z5a`). Never changes once assigned, unlike the slug. Null on projections that do not select it and on rows still awaiting handle backfill. */
    publicId: z
        .string()
        .regex(/^e[0-9A-Za-z]{11}$/)
        .nullish(),
    /** Absolute public profile URL on the aVenture front-end, e.g. `https://aventure.vc/non-profits/{slug}`, derived from the typeRecord's canonical route family. Null when the route needs relationship context or the record has no direct public SSR route (Business Line, Organization, Product, Service, or a non-public slug). EntityDetail.publicUrl resolves Business Line parent context. Product/Service pages are provider-nested: compose the provider entity's publicUrl + `/products-services/` + this record's slug, or consume the sitemap-urls slot paths, which already emit the composed child routes. */
    publicUrl: z.string().nullish(),
    /** Sub-route eligibility, populated by the sitemap projection. Null on non-sitemap reads to keep thin payloads compact. */
    sitemap: EntitySitemapSchema.nullish(),
    /** URL-safe identifier */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Entity type classification */
    typeRecord: EntityTypeSchema.nullish(),
    /** Last modification timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=entity.js.map