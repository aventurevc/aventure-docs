import { z } from "zod/v4";
declare const SharedSearchListSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    id: z.ZodUUID;
    query: z.ZodString;
    slug: z.ZodString;
}, z.core.$strip>;
type SharedSearchListDefinition = z.infer<typeof SharedSearchListSchemaDefinition>;
/**
 * Public search publication metadata.
 *
 * @openapiSchema SharedSearchList
 * @endpoint GET /v1/search/shared
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search/shared
 * @usedBySchema CursorSliceSharedSearchListSchema
 * @usedBySchema SharedSearchSchema
 * @contractShape shared.search-list
 * @contractRole canonical
 */
export declare const SharedSearchListSchema: z.ZodType<SharedSearchListDefinition>;
export type SharedSearchList = z.infer<typeof SharedSearchListSchema>;
export {};
//# sourceMappingURL=search-list.d.ts.map