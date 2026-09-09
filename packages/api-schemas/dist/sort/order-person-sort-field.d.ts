import { z } from "zod/v4";
declare const SortOrderPersonSortFieldSchemaDefinition: z.ZodObject<{
    descending: z.ZodBoolean;
    field: z.ZodEnum<{
        AMOUNT_INVESTED: "AMOUNT_INVESTED";
        CREATED_AT: "CREATED_AT";
        FIRST_NAME: "FIRST_NAME";
        FULL_NAME: "FULL_NAME";
        GENDER: "GENDER";
        ID: "ID";
        LAST_NAME: "LAST_NAME";
        SLUG: "SLUG";
        STATUS: "STATUS";
        TOTAL_INVESTMENTS: "TOTAL_INVESTMENTS";
        UPDATED_AT: "UPDATED_AT";
    }>;
}, z.core.$strip>;
type SortOrderPersonSortFieldDefinition = z.infer<typeof SortOrderPersonSortFieldSchemaDefinition>;
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderPersonSortField
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchOrderingPersonSortFieldSchema
 * @contractShape sort.order-person-sort-field
 * @contractRole canonical
 */
export declare const SortOrderPersonSortFieldSchema: z.ZodType<SortOrderPersonSortFieldDefinition>;
export type SortOrderPersonSortField = z.infer<typeof SortOrderPersonSortFieldSchema>;
export {};
//# sourceMappingURL=order-person-sort-field.d.ts.map