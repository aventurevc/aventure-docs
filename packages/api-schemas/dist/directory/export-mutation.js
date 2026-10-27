// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DirectoryExportColumnTypeSchema } from "./export-column-type.js";
import { EntityListFilterSchema } from "../entity/list-filter.js";
import { EntityUrlTypeSchema } from "../entity/url-type.js";
import { PersonFilterSchema } from "../person/filter.js";
import { SharedDirectoryTypeSchema } from "../shared/directory-type.js";
const DirectoryExportMutationSchemaDefinition = z.object({
    /** Core columns in the requested order; absent uses the directory's defaults. */
    column: z.array(DirectoryExportColumnTypeSchema).nullish(),
    /** Directory whose records are exported. */
    directory: SharedDirectoryTypeSchema,
    /** The companies or investors view's entity search filter. */
    entityFilter: EntityListFilterSchema.nullish(),
    /** Ordered selection; ignores filters, sort, page and size. Inaccessible records are omitted. */
    id: z.array(z.uuid()).max(100).nullish(),
    /** Zero-based view page; ignored with id. */
    page: z.int().min(0),
    /** The people view's person search filter. */
    personFilter: PersonFilterSchema.nullish(),
    /** View page size, from 1 through 100; ignored with id. */
    size: z.int().min(1).max(100),
    /** View order as property,asc or property,desc; ignored with id. */
    sort: z.string().nullish(),
    /** URL columns after the core columns. Passing urlType keeps columns stable across pages; absent emits types present on this page in declaration order. */
    urlType: z.array(EntityUrlTypeSchema).nullish(),
});
/**
 * Export a directory page or an ordered selection of at most 100 records.
 *
 * @openapiSchema DirectoryExportMutation
 * @endpoint POST /v1/directory/exports
 * @contractShape directory.export-mutation
 * @contractRole canonical
 */
export const DirectoryExportMutationSchema = DirectoryExportMutationSchemaDefinition;
//# sourceMappingURL=export-mutation.js.map