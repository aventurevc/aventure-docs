// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_FILTERS_COUNTS_ENDPOINT = "/v1/entities/filters/counts";
/**
 * Request-side query params for `GET /v1/entities/filters/counts`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/filters/counts
 * @contractShape entity.filters-counts-param
 * @contractRole canonical
 */
export const EntityFiltersCountsParamSchema = z.object({
    /** Minimum count threshold */
    minCount: z.int().min(0).optional(),
    /** Tag name values to filter counts */
    name: z.array(z.string()).max(100).optional(),
    /** Maximum number of results */
    size: z.int().min(1).max(200).optional(),
    /** Entity type (Company, Investment Firm, etc.) */
    typeRecord: z.string().optional(),
});
//# sourceMappingURL=filters-counts-param.js.map