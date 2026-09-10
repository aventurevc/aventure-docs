// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_LOOKUP_ENDPOINT = "/v1/entities/lookup";
/**
 * Request-side query params for `GET /v1/entities/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/lookup
 * @contractShape entity.lookup-param
 * @contractRole canonical
 */
export const EntityLookupParamSchema = z.object({
    /** Provider slug for Product/Service slug lookup. Historically named companySlug; providerTypeRecord can narrow this to Company, Nonprofit, or Government routes. */
    companySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .optional(),
    /** Privileged admin readback scope. Includes hidden or off-sitemap entities and hidden research snippets. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
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
    /** Concrete entity type qualifier; group-only Organization is invalid. List the accepted concrete tokens and their aliases with GET /v1/entities/types (CLI: entities type-record types list). */
    typeRecord: z.string().optional(),
    /** Entity URL matched by host and path unless urlMatchMode=domain. */
    url: z.string().optional(),
    /** Website domain candidate without protocol or path. */
    urlDomain: z.string().optional(),
    /** URL matching mode: hostPath (default for url) or domain. Omit when urlDomain is supplied; urlDomain selects domain mode automatically. */
    urlMatchMode: z.string().optional(),
    /** URL type qualifier. List the accepted tokens with GET /v1/entities/urls/types (CLI: entities urls types list). */
    urlType: z.string().optional(),
});
//# sourceMappingURL=lookup-param.js.map