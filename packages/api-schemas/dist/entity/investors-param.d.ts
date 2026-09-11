import { z } from "zod/v4";
export declare const ENTITY_INVESTORS_ENDPOINT: "/v1/entities/{entityId}/investors";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investors`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investors
 * @contractShape entity.investors-param
 * @contractRole canonical
 */
export declare const EntityInvestorsParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityInvestorsParam = z.infer<typeof EntityInvestorsParamSchema>;
//# sourceMappingURL=investors-param.d.ts.map