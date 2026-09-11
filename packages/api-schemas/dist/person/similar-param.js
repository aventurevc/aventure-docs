// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const PERSON_SIMILAR_ENDPOINT = "/v1/people/{personId}/similar";
/**
 * Request-side query params for `GET /v1/people/{personId}/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/people/{personId}/similar
 * @contractShape person.similar-param
 * @contractRole canonical
 */
export const PersonSimilarParamSchema = z.object({
    /** Zero-based page index (0..N) */
    page: z.int().min(0).default(0).optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** The size of the page to be returned */
    size: z.int().min(1).default(10).optional(),
});
//# sourceMappingURL=similar-param.js.map