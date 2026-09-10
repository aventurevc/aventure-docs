import { z } from "zod/v4";
export declare const NEWS_LOOKUP_ENDPOINT: "/v1/news/lookup";
/**
 * Request-side query params for `GET /v1/news/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/news/lookup
 * @contractShape news.lookup-param
 * @contractRole canonical
 */
export declare const NewsLookupParamSchema: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodString>;
    publication: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    urlDomain: z.ZodOptional<z.ZodString>;
    urlMatchMode: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NewsLookupParam = z.infer<typeof NewsLookupParamSchema>;
//# sourceMappingURL=lookup-param.d.ts.map