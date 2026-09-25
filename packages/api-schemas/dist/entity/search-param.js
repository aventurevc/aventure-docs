// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_SEARCH_ENDPOINT = "/v1/entities/search";
/**
 * Request-side query params for `POST /v1/entities/search`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/search
 * @contractShape entity.search-param
 * @contractRole canonical
 */
export const EntitySearchParamSchema = PageParamSchema.extend({
    /** Return only the matching entity count in totalElements. Content is empty by design, so the page empty flag describes content, not whether matches exist. Unsupported with semanticQuery. */
    countOnly: z.boolean().optional(),
    /** Opaque entity cursor; reuse filters and sort. Cursor is unsupported with countOnly; semanticQuery depends on the endpoint. */
    cursor: z.string().optional(),
    /** Privileged read flag. Must be true to return the /v1/entities/detail payload. */
    includeFullDetail: z.boolean().optional(),
    /** Includes hidden or off-sitemap entities when the caller has private-visibility authority. Omit to use the caller's default visibility. */
    includePrivate: z.boolean().optional(),
    /** Allow generated monogram logos in results. */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=search-param.js.map