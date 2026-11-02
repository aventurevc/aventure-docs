// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_LOOKUP_EXACT_ENDPOINT = "/v1/entities/lookup-exact";
/**
 * Request-side query params for `GET /v1/entities/lookup-exact`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/lookup-exact
 * @contractShape entity.lookup-exact-param
 * @contractRole canonical
 */
export const EntityLookupExactParamSchema = z.object({
    /** Provider slug for Product/Service slug lookup; providerTypeRecord can narrow this to Company, Nonprofit, or Government routes. */
    companySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .optional(),
    /** Exact peer UUIDs in display order for an optional cited comparison on the UUID item JSON read. Exclude the subject and duplicates; subject plus peers must fit the served search answer policy maxEntityEvidence. Uses public stored evidence only, requires the caller's paid natural-search entitlement, and consumes no search allowance or peer views. Omit for ordinary reads; ignored on HEAD and SSE. */
    comparisonEntityId: z.array(z.uuid()).optional(),
    /** Location candidate: city, state, or country. */
    location: z.string().optional(),
    /** Primary entity name candidate. */
    name: z.string().optional(),
    /** Brand name candidate. */
    nameBrand: z.string().optional(),
    /** Legal name candidate. */
    nameLegal: z.string().optional(),
    /** Allow generated monogram logo fallback. */
    permitMonogram: z.boolean().optional(),
    /** Concrete provider type qualifier for a Product/Service provider route; group-only Organization is invalid. Use with companySlug when resolving `/companies/{slug}/products-services/{product}`, `/non-profits/{slug}/products-services/{product}`, or `/government/{slug}/products-services/{product}`. */
    providerTypeRecord: z.string().optional(),
    /** Exact entity slug. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .optional(),
    /** Concrete entity type qualifier; group-only Organization is invalid. List the accepted concrete tokens and their aliases with GET /v1/entities/types (CLI: entities types list). */
    typeRecord: z.string().optional(),
    /** aventure.vc profile URL (such as https://aventure.vc/companies/<slug>), or the entity's own website or domain URL, matched by host and path unless urlMatchMode=domain. */
    url: z.string().optional(),
    /** Website domain candidate without protocol or path. */
    urlDomain: z.string().optional(),
    /** URL matching mode: hostPath (default for url) or domain. Omit when urlDomain is supplied; urlDomain selects domain mode automatically. */
    urlMatchMode: z.string().optional(),
    /** URL type qualifier. List the accepted tokens with GET /v1/url-types (CLI: url-types list). */
    urlType: z.string().optional(),
});
//# sourceMappingURL=lookup-exact-param.js.map