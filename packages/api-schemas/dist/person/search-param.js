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
    /** Opaque continuation from X-Next-Cursor. Repeat the same filters and size; a semantic cursor also repeats sort, a keyset cursor omits it. */
    cursor: z.string().optional(),
    /** When true, sort people who have a photo before those who do not. */
    hasImageFirst: z.boolean().optional(),
    /** Includes hidden, unverified, and not-yet-published records when the caller has private-visibility authority. Omit to use the caller's default visibility. */
    includePrivate: z.boolean().optional(),
    /** When false, monogram fallback logos are stripped from the response. Defaults to true. */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=search-param.js.map