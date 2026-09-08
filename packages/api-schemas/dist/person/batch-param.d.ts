import { z } from "zod/v4";
export declare const PERSON_BATCH_ENDPOINT: "/v1/people/batch";
/**
 * Request-side query params for `POST /v1/people/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/batch
 * @contractShape person.batch-param
 * @contractRole canonical
 */
export declare const PersonBatchParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    hasImageFirst: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    maxAssociations: z.ZodOptional<z.ZodInt>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    projection: z.ZodOptional<z.ZodEnum<{
        association: "association";
        core: "core";
    }>>;
}, z.core.$strip>;
export type PersonBatchParam = z.infer<typeof PersonBatchParamSchema>;
//# sourceMappingURL=batch-param.d.ts.map