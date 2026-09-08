import { z } from "zod/v4";
/**
 * Filter option mode
 *
 * @openapiSchema EntityFilterOptionMode
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterOptionSetMetaSchema
 * @contractShape entity.filter-option-mode
 * @contractRole canonical
 */
export declare const EntityFilterOptionModeSchema: z.ZodEnum<{
    FULL_RESULTS: "FULL_RESULTS";
    TOP_RESULTS: "TOP_RESULTS";
}>;
export type EntityFilterOptionMode = z.infer<typeof EntityFilterOptionModeSchema>;
//# sourceMappingURL=filter-option-mode.d.ts.map