import { z } from "zod/v4";
export declare const ENTITY_LOOKUP_ENDPOINT: "/v1/entities/lookup";
/**
 * Request-side query params for `GET /v1/entities/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/lookup
 * @contractShape entity.lookup-param
 * @contractRole canonical
 */
export declare const EntityLookupParamSchema: z.ZodObject<{
    companySlug: z.ZodOptional<z.ZodString>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    location: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    nameBrand: z.ZodOptional<z.ZodString>;
    nameLegal: z.ZodOptional<z.ZodString>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    providerTypeRecord: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    typeRecord: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    urlDomain: z.ZodOptional<z.ZodString>;
    urlMatchMode: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityLookupParam = z.infer<typeof EntityLookupParamSchema>;
//# sourceMappingURL=lookup-param.d.ts.map