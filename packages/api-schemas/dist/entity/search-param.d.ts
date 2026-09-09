import { z } from "zod/v4";
export declare const ENTITY_SEARCH_ENDPOINT: "/v1/entities/search";
/**
 * Request-side query params for `POST /v1/entities/search`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/search
 * @contractShape entity.search-param
 * @contractRole canonical
 */
export declare const EntitySearchParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    countOnly: z.ZodOptional<z.ZodBoolean>;
    cursor: z.ZodOptional<z.ZodString>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntitySearchParam = z.infer<typeof EntitySearchParamSchema>;
//# sourceMappingURL=search-param.d.ts.map