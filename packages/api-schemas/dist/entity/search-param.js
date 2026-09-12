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
    /** Opaque sort-aware entity cursor; reuse the same filters and sort. Unsupported with semanticQuery or countOnly. */
    cursor: z.string().optional(),
    /** Privileged read flag. Must be true to return the /v1/entities/detail payload. */
    includeFullDetail: z.boolean().optional(),
    /** Privileged admin readback scope. Includes hidden or off-sitemap entities. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** Allow generated monogram logos in results. */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=search-param.js.map