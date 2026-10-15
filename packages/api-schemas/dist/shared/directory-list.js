// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SharedDirectoryTypeSchema } from "./directory-type.js";
const SharedDirectoryListSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    directory: SharedDirectoryTypeSchema,
    /** Page heading the model wrote for the view. */
    heading: z.string(),
    /** Stable shared-directory UUID */
    id: z.uuid(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
});
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
export const SharedDirectoryListSchema = SharedDirectoryListSchemaDefinition;
//# sourceMappingURL=directory-list.js.map