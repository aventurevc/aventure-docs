import { z } from "zod/v4";
declare const CursorSliceSharedDirectoryListSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        createdAt: string;
        directory: "companies" | "investors" | "people";
        heading: string;
        id: string;
        slug: string;
    }, import("../shared/directory-list.ts").SharedDirectoryListSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        directory: "companies" | "investors" | "people";
        heading: string;
        id: string;
        slug: string;
    }, import("../shared/directory-list.ts").SharedDirectoryListSchemaInput>>>;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceSharedDirectoryListDefinition = z.infer<typeof CursorSliceSharedDirectoryListSchemaDefinition>;
export interface CursorSliceSharedDirectoryListSchemaInput extends z.input<typeof CursorSliceSharedDirectoryListSchemaDefinition> {
}
/**
 * @openapiSchema CursorSliceSharedDirectoryList
 * @endpoint GET /v1/directory/shared
 * @contractShape cursor.slice-shared-directory-list
 * @contractRole canonical
 */
export declare const CursorSliceSharedDirectoryListSchema: z.ZodType<CursorSliceSharedDirectoryListDefinition, CursorSliceSharedDirectoryListSchemaInput>;
export type CursorSliceSharedDirectoryList = z.infer<typeof CursorSliceSharedDirectoryListSchema>;
export {};
//# sourceMappingURL=slice-shared-directory-list.d.ts.map