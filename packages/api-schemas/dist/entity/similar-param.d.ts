import { z } from "zod/v4";
export declare const ENTITY_SIMILAR_ENDPOINT: "/v1/entities/{entityId}/similar";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/similar
 * @contractShape entity.similar-param
 * @contractRole canonical
 */
export declare const EntitySimilarParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    relationshipType: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    typeRecord: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type EntitySimilarParam = z.infer<typeof EntitySimilarParamSchema>;
//# sourceMappingURL=similar-param.d.ts.map