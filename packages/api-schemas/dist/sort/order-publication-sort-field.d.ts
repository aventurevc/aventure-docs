import { z } from "zod/v4";
declare const SortOrderPublicationSortFieldSchemaDefinition: z.ZodObject<{
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
type SortOrderPublicationSortFieldDefinition = z.infer<typeof SortOrderPublicationSortFieldSchemaDefinition>;
/**
 * Single sort term: which enumerated sort field to use and whether direction is descending.
 *
 * @openapiSchema SortOrderPublicationSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema SortSpecPublicationSortFieldSchema
 * @contractShape sort.order-publication-sort-field
 * @contractRole canonical
 */
export declare const SortOrderPublicationSortFieldSchema: z.ZodType<SortOrderPublicationSortFieldDefinition>;
export type SortOrderPublicationSortField = z.infer<typeof SortOrderPublicationSortFieldSchema>;
export {};
//# sourceMappingURL=order-publication-sort-field.d.ts.map