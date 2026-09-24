import { z } from "zod/v4";
export declare const ENTITY_LOOKUP_BATCH_ENDPOINT: "/v1/entities/lookup/batch";
/**
 * Request-side query params for `POST /v1/entities/lookup/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/entities/lookup/batch
 * @contractShape entity.lookup-batch-param
 * @contractRole canonical
 */
export declare const EntityLookupBatchParamSchema: z.ZodObject<{
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export type EntityLookupBatchParam = z.infer<typeof EntityLookupBatchParamSchema>;
//# sourceMappingURL=lookup-batch-param.d.ts.map