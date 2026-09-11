import { z } from "zod/v4";
export declare const ENTITY_FUNDRAISE_ROUNDS_ENDPOINT: "/v1/entities/{entityId}/fundraise-rounds";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/fundraise-rounds`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @contractShape entity.fundraise-rounds-param
 * @contractRole canonical
 */
export declare const EntityFundraiseRoundsParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodISODate>;
    dateTo: z.ZodOptional<z.ZodISODate>;
    maxAmount: z.ZodOptional<z.ZodNumber>;
    minAmount: z.ZodOptional<z.ZodNumber>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    round: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityFundraiseRoundsParam = z.infer<typeof EntityFundraiseRoundsParamSchema>;
//# sourceMappingURL=fundraise-rounds-param.d.ts.map