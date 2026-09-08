import { z } from "zod/v4";
declare const SortSpecPersonSortFieldSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
    }, unknown, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
    }, unknown>>>;
}, z.core.$strip>;
type SortSpecPersonSortFieldDefinition = z.infer<typeof SortSpecPersonSortFieldSchemaDefinition>;
/**
 * Multi-term sort. First term has highest precedence. Used on entity list filters and saved-view payloads. An empty `order` array is valid JSON and means the client did not specify sort terms; the server applies resource-specific defaults.
 *
 * @openapiSchema SortSpecPersonSortField
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape sort.spec-person-sort-field
 * @contractRole canonical
 */
export declare const SortSpecPersonSortFieldSchema: z.ZodType<SortSpecPersonSortFieldDefinition>;
export type SortSpecPersonSortField = z.infer<typeof SortSpecPersonSortFieldSchema>;
export {};
//# sourceMappingURL=spec-person-sort-field.d.ts.map