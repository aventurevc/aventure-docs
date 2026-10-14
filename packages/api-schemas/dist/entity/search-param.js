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
    /** Set true to return each match as a company detail search record instead of the list row: the headquarters address, the first 5 people (most recently updated association first), and the first 5 news articles (newest first). Full lists: GET /v1/entities/{entityId}/addresses, GET /v1/entities/{entityId}/people, and GET /v1/news?owner.entityId=. */
    includeFullDetail: z.boolean().optional(),
    /** Allow generated monogram logos in results. */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=search-param.js.map