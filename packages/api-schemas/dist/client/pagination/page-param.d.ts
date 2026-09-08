import { z } from "zod/v4";
/**
 * Query-string sort parameter: single `"field,dir"` or multi-sort array.
 *
 * Matches the OpenAPI operation parameter emitted by springdoc for
 * `@ParameterObject Pageable` endpoints:
 *   sort: { type: "array", items: { type: "string" } }
 *
 * Clients may pass a single string or an array; Spring accepts both.
 *
 * @shared primitive:single reusable request-side sort parameter; not direct because Spring Pageable flows into OpenAPI as operation parameters, not component schemas
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.pagination-sort-param
 * @contractRole canonical
 * @ownerModule client/pagination/page-param.ts
 */
export declare const SortParamSchema: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type SortParam = z.infer<typeof SortParamSchema>;
/**
 * Request-side page/size/sort query parameters for Spring `@ParameterObject Pageable` endpoints.
 *
 * Derived from the OpenAPI operation parameters emitted by springdoc:
 *   page: { type: "integer", default: 0, minimum: 0 }
 *   size: { type: "integer", default: 25, minimum: 1 }
 *   sort: { type: "array", items: { type: "string" } }
 *
 * This is the client-side canonical owner for pagination request params.
 * Response-side pagination metadata lives in `pageable/object.ts` (PageableObject)
 * and `pagination/schemas.ts` (Page<T> envelopes).
 *
 * @shared composition:used as building block for other schemas client.pagination-page-param; not direct because Spring Pageable flows into OpenAPI as operation parameters, not component schemas
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.pagination-page-param
 * @contractRole canonical
 * @ownerModule client/pagination/page-param.ts
 */
export declare const PageParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type PageParam = z.infer<typeof PageParamSchema>;
//# sourceMappingURL=page-param.d.ts.map