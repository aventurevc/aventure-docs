import { z } from "zod/v4";
declare const SearchOrderingPersonSortFieldSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
        sortKey?: string | null | undefined;
    }, import("../sort/order-person-sort-field.ts").SortOrderPersonSortFieldSchemaInput, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
        sortKey?: string | null | undefined;
    }, import("../sort/order-person-sort-field.ts").SortOrderPersonSortFieldSchemaInput>>>;
    relevance: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        keyword: "keyword";
        semantic: "semantic";
    }>>>;
}, z.core.$strip>;
type SearchOrderingPersonSortFieldDefinition = z.infer<typeof SearchOrderingPersonSortFieldSchemaDefinition>;
export interface SearchOrderingPersonSortFieldSchemaInput extends z.input<typeof SearchOrderingPersonSortFieldSchemaDefinition> {
}
/**
 * Ordering applied to a search result page: an optional relevance rank that precedes the sortable-column terms.
 *
 * @openapiSchema SearchOrderingPersonSortField
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape search.ordering-person-sort-field
 * @contractRole canonical
 */
export declare const SearchOrderingPersonSortFieldSchema: z.ZodType<SearchOrderingPersonSortFieldDefinition, SearchOrderingPersonSortFieldSchemaInput>;
export type SearchOrderingPersonSortField = z.infer<typeof SearchOrderingPersonSortFieldSchema>;
export {};
//# sourceMappingURL=ordering-person-sort-field.d.ts.map