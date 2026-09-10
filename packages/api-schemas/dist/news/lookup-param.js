// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const NEWS_LOOKUP_ENDPOINT = "/v1/news/lookup";
/**
 * Request-side query params for `GET /v1/news/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/news/lookup
 * @contractShape news.lookup-param
 * @contractRole canonical
 */
export const NewsLookupParamSchema = z.object({
    /** External ID or RSS GUID for ingestion-key lookup. Mutually exclusive with id, slug, url, and title. */
    externalId: z.string().optional(),
    /** Publication qualifier (e.g., 'TechCrunch', 'Forbes'). Narrows a title candidate search. Not an identifier on its own. */
    publication: z.string().optional(),
    /** Exact news article slug (URL-friendly identifier). Mutually exclusive with id, externalId, url, and title. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .optional(),
    /** Candidate lookup signal: article title. Mutually exclusive with id, slug, and externalId. Combine with publication, urlDomain, or url for bounded candidate search. */
    title: z.string().optional(),
    /** Original article URL to resolve via strict host+path or domain-only match. Mutually exclusive with id, slug, and externalId. May pair with title and publication to narrow candidate recovery after an exact URL miss. Pair with urlMatchMode to disambiguate. */
    url: z.string().optional(),
    /** Candidate lookup URL domain qualifier (host only, no path). Narrows a title candidate search. Not an identifier on its own. */
    urlDomain: z.string().optional(),
    /** URL match mode qualifier: 'hostPath' (strict host + path match, default) or 'domain' (host-only match). Narrows url and urlDomain matching. Not an identifier on its own. */
    urlMatchMode: z.string().optional(),
});
//# sourceMappingURL=lookup-param.js.map