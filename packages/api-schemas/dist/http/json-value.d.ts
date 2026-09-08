import { z } from "zod/v4";
export type JsonValue = string | number | boolean | null | JsonValue[] | {
    [key: string]: JsonValue;
};
/**
 * @usedByEndpoint none:external-root
 * @shared primitive:single reusable JSON value helper; not direct because valid OpenAPI unconstrained value positions require a generated recursive value schema
 * @contractShape http.json-value
 * @contractRole canonical
 * @ownerModule http/json-value.ts
 */
export declare const JsonValueSchema: z.ZodType<JsonValue>;
//# sourceMappingURL=json-value.d.ts.map