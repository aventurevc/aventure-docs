import { z } from "zod/v4";
declare const SortOrderEntityFilterSortableSchemaDefinition: z.ZodObject<{
    descending: z.ZodBoolean;
    field: z.ZodEnum<{
        ACCELERATOR_BRAND: "ACCELERATOR_BRAND";
        ACCELERATOR_COHORT: "ACCELERATOR_COHORT";
        AMOUNT_INVESTED: "AMOUNT_INVESTED";
        CREATED_AT: "CREATED_AT";
        EMPLOYEE_COUNT: "EMPLOYEE_COUNT";
        HEADQUARTERS_COUNTRY: "HEADQUARTERS_COUNTRY";
        ID: "ID";
        LATEST_VALUATION: "LATEST_VALUATION";
        MOST_RECENT_AMOUNT: "MOST_RECENT_AMOUNT";
        MOST_RECENT_DATE: "MOST_RECENT_DATE";
        NAME_BRAND: "NAME_BRAND";
        STAGE: "STAGE";
        STATUS_OPERATING: "STATUS_OPERATING";
        TOTAL_RAISED: "TOTAL_RAISED";
        UPDATED_AT: "UPDATED_AT";
        YEAR_FOUNDED: "YEAR_FOUNDED";
    }>;
}, z.core.$strip>;
type SortOrderEntityFilterSortableDefinition = z.infer<typeof SortOrderEntityFilterSortableSchemaDefinition>;
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchOrderingEntityFilterSortableSchema
 * @contractShape sort.order-entity-filter-sortable
 * @contractRole canonical
 */
export declare const SortOrderEntityFilterSortableSchema: z.ZodType<SortOrderEntityFilterSortableDefinition>;
export type SortOrderEntityFilterSortable = z.infer<typeof SortOrderEntityFilterSortableSchema>;
export {};
//# sourceMappingURL=order-entity-filter-sortable.d.ts.map