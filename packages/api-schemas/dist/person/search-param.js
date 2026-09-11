// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const PERSON_SEARCH_ENDPOINT = "/v1/people/search";
/**
 * Request-side query params for `POST /v1/people/search`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/search
 * @contractShape person.search-param
 * @contractRole canonical
 */
export const PersonSearchParamSchema = PageParamSchema.extend({
    /** When true, return only the page total in the body and skip the content payload. */
    countOnly: z.boolean().optional(),
    /** When true, sort people who have a photo before those who do not. */
    hasImageFirst: z.boolean().optional(),
    /** Privileged read scope for admin callers. Bypasses the public visibility filter so hidden, unverified, and not-yet-published records are returned instead of being silently dropped. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** When false, monogram fallback logos are stripped from the response. Defaults to true. */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=search-param.js.map