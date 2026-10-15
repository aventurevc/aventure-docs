// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Public directory page whose filtered view is shared.
 *
 * @openapiSchema SharedDirectoryType
 * @endpoint GET /v1/directory/shared
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @usedBySchema SharedDirectoryListSchema
 * @usedBySchema SharedDirectoryMutationSchema
 * @contractShape shared.directory-type
 * @contractRole canonical
 */
export const SharedDirectoryTypeSchema = z.enum(["companies", "investors", "people"]);
//# sourceMappingURL=directory-type.js.map