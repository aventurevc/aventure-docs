import { z } from "zod/v4";
export declare const ENTITY_INVESTMENTS_ENDPOINT: "/v1/entities/{entityId}/investments";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investments`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investments
 * @contractShape entity.investments-param
 * @contractRole canonical
 */
export declare const EntityInvestmentsParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodISODate>;
    dateTo: z.ZodOptional<z.ZodISODate>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    latestPerEntity: z.ZodOptional<z.ZodBoolean>;
    maxAmount: z.ZodOptional<z.ZodNumber>;
    minAmount: z.ZodOptional<z.ZodNumber>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    round: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityInvestmentsParam = z.infer<typeof EntityInvestmentsParamSchema>;
//# sourceMappingURL=investments-param.d.ts.map