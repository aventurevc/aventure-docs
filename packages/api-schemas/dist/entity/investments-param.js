// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_INVESTMENTS_ENDPOINT = "/v1/entities/{entityId}/investments";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investments`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investments
 * @contractShape entity.investments-param
 * @contractRole canonical
 */
export const EntityInvestmentsParamSchema = PageParamSchema.extend({
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Inclusive minimum announced date */
    dateFrom: z.iso.date().optional(),
    /** Inclusive maximum announced date */
    dateTo: z.iso.date().optional(),
    /** Privileged private readback scope. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret frontend reads stay public. */
    includePrivate: z.boolean().optional(),
    /** Return latest transaction per entity */
    latestPerEntity: z.boolean().optional(),
    /** Inclusive maximum amount raised. Use a plain whole-number amount such as 50000000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    maxAmount: z.number().int().optional(),
    /** Inclusive minimum amount raised. Use a plain whole-number amount such as 500000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    minAmount: z.number().int().optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Round label contains filter */
    round: z.string().optional(),
});
//# sourceMappingURL=investments-param.js.map