import { z } from "zod/v4";
declare const CursorSliceSharedSearchListSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        createdAt: string;
        id: string;
        query: string;
        slug: string;
    }, import("../shared/search-list.ts").SharedSearchListSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: string;
        query: string;
        slug: string;
    }, import("../shared/search-list.ts").SharedSearchListSchemaInput>>>;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceSharedSearchListDefinition = z.infer<typeof CursorSliceSharedSearchListSchemaDefinition>;
export interface CursorSliceSharedSearchListSchemaInput extends z.input<typeof CursorSliceSharedSearchListSchemaDefinition> {
}
/**
 * @openapiSchema CursorSliceSharedSearchList
 * @endpoint GET /v1/search/shared
 * @contractShape cursor.slice-shared-search-list
 * @contractRole canonical
 */
export declare const CursorSliceSharedSearchListSchema: z.ZodType<CursorSliceSharedSearchListDefinition, CursorSliceSharedSearchListSchemaInput>;
export type CursorSliceSharedSearchList = z.infer<typeof CursorSliceSharedSearchListSchema>;
export {};
//# sourceMappingURL=slice-shared-search-list.d.ts.map