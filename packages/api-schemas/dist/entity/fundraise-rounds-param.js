// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_FUNDRAISE_ROUNDS_ENDPOINT = "/v1/entities/{entityId}/fundraise-rounds";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/fundraise-rounds`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @contractShape entity.fundraise-rounds-param
 * @contractRole canonical
 */
export const EntityFundraiseRoundsParamSchema = PageParamSchema.extend({
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Inclusive minimum announced date */
    dateFrom: z.iso.date().optional(),
    /** Inclusive maximum announced date */
    dateTo: z.iso.date().optional(),
    /** Inclusive maximum amount raised. Use a plain whole-number amount such as 50000000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    maxAmount: z.number().int().optional(),
    /** Inclusive minimum amount raised. Use a plain whole-number amount such as 500000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    minAmount: z.number().int().optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Round label contains filter */
    round: z.string().optional(),
});
//# sourceMappingURL=fundraise-rounds-param.js.map