import { z } from "zod/v4";
export declare const PERSON_SIMILAR_ENDPOINT: "/v1/people/{personId}/similar";
/**
 * Request-side query params for `GET /v1/people/{personId}/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/people/{personId}/similar
 * @contractShape person.similar-param
 * @contractRole canonical
 */
export declare const PersonSimilarParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    size: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
}, z.core.$strip>;
export type PersonSimilarParam = z.infer<typeof PersonSimilarParamSchema>;
//# sourceMappingURL=similar-param.d.ts.map