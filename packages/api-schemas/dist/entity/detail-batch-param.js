// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_DETAIL_BATCH_ENDPOINT = "/v1/entities/detail/batch";
/**
 * Request-side query params for `POST /v1/entities/detail/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/detail/batch
 * @contractShape entity.detail-batch-param
 * @contractRole canonical
 */
export const EntityDetailBatchParamSchema = z.object({
    /** Privileged read scope for admin callers. Bypasses the public visibility filter so hidden, unverified, and not-yet-published entities are returned instead of being silently dropped. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** Zero-based page index (0..N); omit page and size for the full batch. */
    page: z.int().optional(),
    /** The size of the page to be returned; omit page and size for the full batch. */
    size: z.int().optional(),
});
//# sourceMappingURL=detail-batch-param.js.map