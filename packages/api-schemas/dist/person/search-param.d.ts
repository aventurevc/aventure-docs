import { z } from "zod/v4";
export declare const PERSON_SEARCH_ENDPOINT: "/v1/people/search";
/**
 * Request-side query params for `POST /v1/people/search`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/search
 * @contractShape person.search-param
 * @contractRole canonical
 */
export declare const PersonSearchParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    countOnly: z.ZodOptional<z.ZodBoolean>;
    hasImageFirst: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PersonSearchParam = z.infer<typeof PersonSearchParamSchema>;
//# sourceMappingURL=search-param.d.ts.map