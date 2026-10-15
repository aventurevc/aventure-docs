import { z } from "zod/v4";
declare const SharedDirectoryListSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    directory: z.ZodEnum<{
        companies: "companies";
        investors: "investors";
        people: "people";
    }>;
    heading: z.ZodString;
    id: z.ZodUUID;
    slug: z.ZodString;
}, z.core.$strip>;
type SharedDirectoryListDefinition = z.infer<typeof SharedDirectoryListSchemaDefinition>;
export interface SharedDirectoryListSchemaInput extends z.input<typeof SharedDirectoryListSchemaDefinition> {
}
/**
 * Public directory publication metadata.
 *
 * @openapiSchema SharedDirectoryList
 * @endpoint GET /v1/directory/shared
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @usedBySchema CursorSliceSharedDirectoryListSchema
 * @usedBySchema SharedDirectorySchema
 * @contractShape shared.directory-list
 * @contractRole canonical
 */
export declare const SharedDirectoryListSchema: z.ZodType<SharedDirectoryListDefinition, SharedDirectoryListSchemaInput>;
export type SharedDirectoryList = z.infer<typeof SharedDirectoryListSchema>;
export {};
//# sourceMappingURL=directory-list.d.ts.map