// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SharedSearchListSchema } from "../shared/search-list.js";
const CursorSliceSharedSearchListSchemaDefinition = z.object({
    content: z.array(SharedSearchListSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceSharedSearchList
 * @endpoint GET /v1/search/shared
 * @contractShape cursor.slice-shared-search-list
 * @contractRole canonical
 */
export const CursorSliceSharedSearchListSchema = CursorSliceSharedSearchListSchemaDefinition;
//# sourceMappingURL=slice-shared-search-list.js.map