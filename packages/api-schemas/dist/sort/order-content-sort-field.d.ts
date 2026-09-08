import { z } from "zod/v4";
declare const SortOrderContentSortFieldSchemaDefinition: z.ZodObject<{
    descending: z.ZodBoolean;
    field: z.ZodEnum<{
        CONTENT_ID: "CONTENT_ID";
        CONTENT_TYPE: "CONTENT_TYPE";
        CREATED_AT: "CREATED_AT";
        PUBLISHED_AT: "PUBLISHED_AT";
        RELATION: "RELATION";
        TITLE: "TITLE";
        TOPIC: "TOPIC";
        UPDATED_AT: "UPDATED_AT";
        YEAR: "YEAR";
    }>;
}, z.core.$strip>;
type SortOrderContentSortFieldDefinition = z.infer<typeof SortOrderContentSortFieldSchemaDefinition>;
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderContentSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema SortSpecContentSortFieldSchema
 * @contractShape sort.order-content-sort-field
 * @contractRole canonical
 */
export declare const SortOrderContentSortFieldSchema: z.ZodType<SortOrderContentSortFieldDefinition>;
export type SortOrderContentSortField = z.infer<typeof SortOrderContentSortFieldSchema>;
export {};
//# sourceMappingURL=order-content-sort-field.d.ts.map