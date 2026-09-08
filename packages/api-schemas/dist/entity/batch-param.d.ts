import { z } from "zod/v4";
export declare const ENTITY_BATCH_ENDPOINT: "/v1/entities/batch";
/**
 * Request-side query params for `POST /v1/entities/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/batch
 * @contractShape entity.batch-param
 * @contractRole canonical
 */
export declare const EntityBatchParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeFullDetail: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityBatchParam = z.infer<typeof EntityBatchParamSchema>;
//# sourceMappingURL=batch-param.d.ts.map