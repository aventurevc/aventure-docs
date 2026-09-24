import { z } from "zod/v4";
export declare const ENTITY_FILTERS_COUNTS_ENDPOINT: "/v1/entities/filters/counts";
/**
 * Request-side query params for `GET /v1/entities/filters/counts`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/filters/counts
 * @contractShape entity.filters-counts-param
 * @contractRole canonical
 */
export declare const EntityFiltersCountsParamSchema: z.ZodObject<{
    minCount: z.ZodOptional<z.ZodInt>;
    name: z.ZodOptional<z.ZodArray<z.ZodString>>;
    size: z.ZodOptional<z.ZodInt>;
    typeRecord: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityFiltersCountsParam = z.infer<typeof EntityFiltersCountsParamSchema>;
//# sourceMappingURL=filters-counts-param.d.ts.map