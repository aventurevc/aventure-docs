// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const PERSON_LOOKUP_ENDPOINT = "/v1/people/lookup";
/**
 * Request-side query params for `GET /v1/people/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/people/lookup
 * @contractShape person.lookup-param
 * @contractRole canonical
 */
export const PersonLookupParamSchema = z.object({
    /** Projection qualifier — include address values (default: true). Set false to omit address array. */
    includeAddress: z.boolean().optional(),
    /** Projection qualifier — include association values (default: true). Set false to omit association array. */
    includeAssociation: z.boolean().optional(),
    /** Privileged admin readback scope. Includes hidden or off-sitemap people and privileged private fields. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** Projection qualifier — include URL link values in response (default: true). Set false to omit urlLink array. */
    includeUrl: z.boolean().optional(),
    /** Group C — candidate lookup signal: person location (city, state, country). Combine with other group-C signals for bounded search. Mutually exclusive with id and slug; may be combined with url for fallback. */
    location: z.string().optional(),
    /** Projection qualifier — max association values to return; bounded internally to the association limit. Default: 40. */
    maxAssociations: z.int().optional(),
    /** Group C — candidate lookup signal: loose name match (any of given/family/full). Combine with other group-C signals for disambiguation. Mutually exclusive with id and slug; may be combined with url for fallback. */
    nameAny: z.string().optional(),
    /** Group C — candidate lookup signal: person full name. Combine with other group-C signals (nameAny, location, urlDomain) for bounded candidate search. Mutually exclusive with id and slug; may be combined with url for fallback. */
    nameFull: z.string().optional(),
    /** Permit generated monogram photo fallback (default: true). Set false to exclude monogram photos in response. */
    permitMonogram: z.boolean().optional(),
    /** Group A — exact person slug (URL-friendly identifier). Mutually exclusive with id, url, and every candidate signal in group C. */
    slug: z.string().optional(),
    /** Group B — current person URL to resolve via strict host+path or domain-only match. Mutually exclusive with id and slug; may be combined with group-C candidate signals for URL-first fallback. */
    url: z.string().optional(),
    /** Group C — candidate lookup signal: person URL domain (host only, no path). Combine with other group-C signals for disambiguation. Mutually exclusive with id and slug; may be combined with url for fallback. */
    urlDomain: z.string().optional(),
    /** URL match mode qualifier: 'hostPath' (strict host + path match, default) or 'domain' (host-only match). Not an identifier on its own. */
    urlMatchMode: z.string().optional(),
    /** Optional URL type qualifier for URL lookup (e.g., 'linkedin', 'twitter'). Narrows Group B (url) and Group C (urlDomain) matching. Not an identifier on its own. */
    urlType: z.string().optional(),
});
//# sourceMappingURL=lookup-param.js.map