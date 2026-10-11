import { z } from "zod/v4";
export type JsonValue = string | number | boolean | null | JsonValue[] | JsonFields;
/** An absent member (`undefined`) is omitted on serialization, as `JSON.stringify` does. */
export type JsonFields = {
    [key: string]: JsonValue | undefined;
};
/**
 * @usedByEndpoint none:external-root
 * @shared primitive:single reusable JSON value helper; not direct because valid OpenAPI unconstrained value positions require a generated recursive value schema
 * @contractShape http.json-value
 * @contractRole canonical
 * @ownerModule http/json-value.ts
 */
export declare const JsonValueSchema: z.ZodType<JsonValue, JsonValue>;
//# sourceMappingURL=json-value.d.ts.map