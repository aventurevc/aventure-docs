// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListFilterSchema } from "../entity/list-filter.js";
import { PersonFilterSchema } from "../person/filter.js";
import { SharedDirectoryTypeSchema } from "./directory-type.js";
const SharedDirectoryMutationSchemaDefinition = z.object({
    /** Directory page the view filters. */
    directory: SharedDirectoryTypeSchema.nullish(),
    /** Body the companies or investors page sends to entity search. */
    entityFilter: EntityListFilterSchema.nullish(),
    /** Stable sharing UUID generated once and reused across retries. */
    id: z.uuid().nullish(),
    /** Body the people page sends to person search. */
    personFilter: PersonFilterSchema.nullish(),
    /** Sort the page sends, as property,asc or property,desc. */
    sort: z.string().max(100).nullish(),
});
/**
 * Publish a directory view under a stable client UUID; retries and identical views return the same publication.
 *
 * @openapiSchema SharedDirectoryMutation
 * @endpoint POST /v1/directory/shared
 * @contractShape shared.directory-mutation
 * @contractRole canonical
 */
export const SharedDirectoryMutationSchema = SharedDirectoryMutationSchemaDefinition;
//# sourceMappingURL=directory-mutation.js.map