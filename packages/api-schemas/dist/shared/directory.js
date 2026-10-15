// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListFilterSchema } from "../entity/list-filter.js";
import { PersonFilterSchema } from "../person/filter.js";
import { SharedDirectoryListSchema } from "./directory-list.js";
const SharedDirectorySchemaDefinition = z.object({
    /** Search-result description, at most 155 characters. */
    description: z.string(),
    /** Entity filter of a companies or investors view. */
    entityFilter: EntityListFilterSchema.nullish(),
    /** Person filter of a people view. */
    personFilter: PersonFilterSchema.nullish(),
    publication: SharedDirectoryListSchema,
    /** Sort as property,direction; absent uses the directory default. */
    sort: z.string().nullish(),
    /** Search-result title, at most 60 characters. */
    title: z.string(),
});
/**
 * A saved public directory view and its page copy.
 *
 * @openapiSchema SharedDirectory
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @contractShape shared.directory
 * @contractRole canonical
 */
export const SharedDirectorySchema = SharedDirectorySchemaDefinition;
//# sourceMappingURL=directory.js.map