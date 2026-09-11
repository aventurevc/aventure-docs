import { z } from "zod/v4";
export declare const NEWS_ENDPOINT: "/v1/news";
/**
 * Request-side query params for `GET /v1/news`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/news
 * @contractShape news.param
 * @contractRole canonical
 */
export declare const NewsParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    authorInitial: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    excludeId: z.ZodOptional<z.ZodInt>;
    letter: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodString>;
    "owner.entityId": z.ZodOptional<z.ZodUUID>;
    "owner.personId": z.ZodOptional<z.ZodUUID>;
    publishedAfter: z.ZodOptional<z.ZodISODate>;
    publishedBefore: z.ZodOptional<z.ZodISODate>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NewsParam = z.infer<typeof NewsParamSchema>;
//# sourceMappingURL=param.d.ts.map