// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SharedSearchListSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    /** Stable shared-search UUID */
    id: z.uuid(),
    query: z.string(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
});
/**
 * Public search publication metadata.
 *
 * @openapiSchema SharedSearchList
 * @endpoint GET /v1/search/shared
 * @usedBySchema CursorSliceSharedSearchListSchema
 * @contractShape shared.search-list
 * @contractRole canonical
 */
export const SharedSearchListSchema = SharedSearchListSchemaDefinition;
//# sourceMappingURL=search-list.js.map