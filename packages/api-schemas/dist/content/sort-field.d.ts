import { z } from "zod/v4";
/**
 * Sortable fields for public content cards.
 *
 * @openapiSchema ContentSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema SortOrderContentSortFieldSchema
 * @contractShape content.sort-field
 * @contractRole canonical
 */
export declare const ContentSortFieldSchema: z.ZodEnum<{
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
export type ContentSortField = z.infer<typeof ContentSortFieldSchema>;
//# sourceMappingURL=sort-field.d.ts.map