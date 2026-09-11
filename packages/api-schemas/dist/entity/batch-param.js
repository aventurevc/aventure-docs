// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_BATCH_ENDPOINT = "/v1/entities/batch";
/**
 * Request-side query params for `POST /v1/entities/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/batch
 * @contractShape entity.batch-param
 * @contractRole canonical
 */
export const EntityBatchParamSchema = PageParamSchema.extend({
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Privileged read flag. Send the exact lowercase literal "true" to return the /v1/entities/detail payload, or "false" (or omit it) for the list payload. Any other spelling is rejected. */
    includeFullDetail: z.boolean().optional(),
    /** Privileged read scope for admin callers. Bypasses the public visibility filter so hidden, unverified, and not-yet-published records are returned instead of being silently dropped. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=batch-param.js.map