// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @usedByEndpoint none:external-root
 * @shared primitive:single reusable JSON value helper; not direct because valid OpenAPI unconstrained value positions require a generated recursive value schema
 * @contractShape http.json-value
 * @contractRole canonical
 * @ownerModule http/json-value.ts
 */
export const JsonValueSchema = z.lazy(() => z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(JsonValueSchema),
    z.record(z.string(), JsonValueSchema),
]));
//# sourceMappingURL=json-value.js.map