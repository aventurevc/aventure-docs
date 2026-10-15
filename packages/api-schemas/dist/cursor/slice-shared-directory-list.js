// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SharedDirectoryListSchema } from "../shared/directory-list.js";
const CursorSliceSharedDirectoryListSchemaDefinition = z.object({
    content: z.array(SharedDirectoryListSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceSharedDirectoryList
 * @endpoint GET /v1/directory/shared
 * @contractShape cursor.slice-shared-directory-list
 * @contractRole canonical
 */
export const CursorSliceSharedDirectoryListSchema = CursorSliceSharedDirectoryListSchemaDefinition;
//# sourceMappingURL=slice-shared-directory-list.js.map