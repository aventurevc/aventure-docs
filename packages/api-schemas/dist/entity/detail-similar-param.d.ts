import { z } from "zod/v4";
export declare const ENTITY_DETAIL_SIMILAR_ENDPOINT: "/v1/entities/detail/similar";
/**
 * Request-side query params for `GET /v1/entities/detail/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/detail/similar
 * @contractShape entity.detail-similar-param
 * @contractRole canonical
 */
export declare const EntityDetailSimilarParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    page: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    relationshipType: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    slug: z.ZodOptional<z.ZodString>;
    typeRecord: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type EntityDetailSimilarParam = z.infer<typeof EntityDetailSimilarParamSchema>;
//# sourceMappingURL=detail-similar-param.d.ts.map