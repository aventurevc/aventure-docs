// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_INVESTORS_ENDPOINT = "/v1/entities/{entityId}/investors";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investors`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investors
 * @contractShape entity.investors-param
 * @contractRole canonical
 */
export const EntityInvestorsParamSchema = PageParamSchema.extend({
    /** Set true to return each investor's own profile with its people, news, funding rounds, relationships, and research as empty lists, not absent fields; the profile's sitemap flags still show which of them exist. Responses are much smaller. */
    compact: z.boolean().optional(),
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Permit generated monogram fallback */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=investors-param.js.map