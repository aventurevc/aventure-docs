// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const PERSON_LOOKUP_BATCH_ENDPOINT = "/v1/people/lookup/batch";
/**
 * Request-side query params for `POST /v1/people/lookup/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/lookup/batch
 * @contractShape person.lookup-batch-param
 * @contractRole canonical
 */
export const PersonLookupBatchParamSchema = z.object({
    /** Includes private fields when the caller has private-visibility authority. Omit to use the caller's default visibility. */
    includePrivate: z.boolean().optional(),
    /** Zero-based page index (0..N); omit page and size for the full batch. */
    page: z.int().optional(),
    /** The size of the page to be returned; omit page and size for the full batch. */
    size: z.int().optional(),
});
//# sourceMappingURL=lookup-batch-param.js.map