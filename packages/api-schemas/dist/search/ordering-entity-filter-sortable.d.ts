import { z } from "zod/v4";
declare const SearchOrderingEntityFilterSortableSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
    }, unknown, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
    }, unknown>>>;
    relevance: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        keyword: "keyword";
        semantic: "semantic";
    }>>>;
}, z.core.$strip>;
type SearchOrderingEntityFilterSortableDefinition = z.infer<typeof SearchOrderingEntityFilterSortableSchemaDefinition>;
/**
 * Ordering applied to a search result page: an optional relevance rank that precedes the sortable-column terms.
 *
 * @openapiSchema SearchOrderingEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.ordering-entity-filter-sortable
 * @contractRole canonical
 */
export declare const SearchOrderingEntityFilterSortableSchema: z.ZodType<SearchOrderingEntityFilterSortableDefinition>;
export type SearchOrderingEntityFilterSortable = z.infer<typeof SearchOrderingEntityFilterSortableSchema>;
export {};
//# sourceMappingURL=ordering-entity-filter-sortable.d.ts.map