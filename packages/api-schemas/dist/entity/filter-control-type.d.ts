import { z } from "zod/v4";
/**
 * Render control discriminator for filter UI components
 *
 * @openapiSchema EntityFilterControlType
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-control-type
 * @contractRole canonical
 */
export declare const EntityFilterControlTypeSchema: z.ZodEnum<{
    checkbox: "checkbox";
    currencyRange: "currencyRange";
    dateRange: "dateRange";
    range: "range";
}>;
export type EntityFilterControlType = z.infer<typeof EntityFilterControlTypeSchema>;
//# sourceMappingURL=filter-control-type.d.ts.map