import { z } from "zod/v4";
declare const SortSpecContentSortFieldSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
    }, unknown, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: "CONTENT_ID" | "CONTENT_TYPE" | "CREATED_AT" | "PUBLISHED_AT" | "RELATION" | "TITLE" | "TOPIC" | "UPDATED_AT" | "YEAR";
    }, unknown>>>;
}, z.core.$strip>;
type SortSpecContentSortFieldDefinition = z.infer<typeof SortSpecContentSortFieldSchemaDefinition>;
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecContentSortField
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchInterpretationSchema
 * @contractShape sort.spec-content-sort-field
 * @contractRole canonical
 */
export declare const SortSpecContentSortFieldSchema: z.ZodType<SortSpecContentSortFieldDefinition>;
export type SortSpecContentSortField = z.infer<typeof SortSpecContentSortFieldSchema>;
export {};
//# sourceMappingURL=spec-content-sort-field.d.ts.map