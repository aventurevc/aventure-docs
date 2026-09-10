import { z } from "zod/v4";
export declare const PERSON_LOOKUP_ENDPOINT: "/v1/people/lookup";
/**
 * Request-side query params for `GET /v1/people/lookup`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/people/lookup
 * @contractShape person.lookup-param
 * @contractRole canonical
 */
export declare const PersonLookupParamSchema: z.ZodObject<{
    includeAddress: z.ZodOptional<z.ZodBoolean>;
    includeAssociation: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    includeUrl: z.ZodOptional<z.ZodBoolean>;
    location: z.ZodOptional<z.ZodString>;
    maxAssociations: z.ZodOptional<z.ZodInt>;
    nameAny: z.ZodOptional<z.ZodString>;
    nameFull: z.ZodOptional<z.ZodString>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    slug: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    urlDomain: z.ZodOptional<z.ZodString>;
    urlMatchMode: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PersonLookupParam = z.infer<typeof PersonLookupParamSchema>;
//# sourceMappingURL=lookup-param.d.ts.map