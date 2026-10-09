import { z } from "zod/v4";
/**
 * Entity filter sortable
 *
 * @openapiSchema EntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SortOrderEntityFilterSortableSchema
 * @contractShape entity.filter-sortable
 * @contractRole canonical
 */
export declare const EntityFilterSortableSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ACCELERATOR_BRAND: "ACCELERATOR_BRAND";
    ACCELERATOR_COHORT: "ACCELERATOR_COHORT";
    AMOUNT_INVESTED: "AMOUNT_INVESTED";
    CREATED_AT: "CREATED_AT";
    DATA_COMPLETION_COVERAGE: "DATA_COMPLETION_COVERAGE";
    EMPLOYEE_COUNT: "EMPLOYEE_COUNT";
    HEADQUARTERS_COUNTRY: "HEADQUARTERS_COUNTRY";
    ID: "ID";
    LATEST_VALUATION: "LATEST_VALUATION";
    MOST_RECENT_AMOUNT: "MOST_RECENT_AMOUNT";
    MOST_RECENT_DATE: "MOST_RECENT_DATE";
    NAME_BRAND: "NAME_BRAND";
    NEXT_DUE_AT: "NEXT_DUE_AT";
    RECENT_INVESTMENT_AT: "RECENT_INVESTMENT_AT";
    STAGE: "STAGE";
    STATUS_OPERATING: "STATUS_OPERATING";
    TOTAL_RAISED: "TOTAL_RAISED";
    UPDATED_AT: "UPDATED_AT";
    YEAR_FOUNDED: "YEAR_FOUNDED";
}>, z.ZodString]>;
export type EntityFilterSortable = z.infer<typeof EntityFilterSortableSchema>;
//# sourceMappingURL=filter-sortable.d.ts.map