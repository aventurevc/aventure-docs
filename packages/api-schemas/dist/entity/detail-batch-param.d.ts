import { z } from "zod/v4";
export declare const ENTITY_DETAIL_BATCH_ENDPOINT: "/v1/entities/detail/batch";
/**
 * Request-side query params for `POST /v1/entities/detail/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/detail/batch
 * @contractShape entity.detail-batch-param
 * @contractRole canonical
 */
export declare const EntityDetailBatchParamSchema: z.ZodObject<{
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export type EntityDetailBatchParam = z.infer<typeof EntityDetailBatchParamSchema>;
//# sourceMappingURL=detail-batch-param.d.ts.map