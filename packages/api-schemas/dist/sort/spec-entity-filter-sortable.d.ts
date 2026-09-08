import { z } from "zod/v4";
declare const SortSpecEntityFilterSortableSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
    }, unknown, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
    }, unknown>>>;
}, z.core.$strip>;
type SortSpecEntityFilterSortableDefinition = z.infer<typeof SortSpecEntityFilterSortableSchemaDefinition>;
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchInterpretationSchema
 * @contractShape sort.spec-entity-filter-sortable
 * @contractRole canonical
 */
export declare const SortSpecEntityFilterSortableSchema: z.ZodType<SortSpecEntityFilterSortableDefinition>;
export type SortSpecEntityFilterSortable = z.infer<typeof SortSpecEntityFilterSortableSchema>;
export {};
//# sourceMappingURL=spec-entity-filter-sortable.d.ts.map