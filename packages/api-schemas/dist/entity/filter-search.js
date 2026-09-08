// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "./filter.js";
const EntityFilterSearchSchemaDefinition = z.strictObject({
    /** Filter key */
    filterKey: z.string().min(1),
    /** Maximum number of search results */
    limit: z.int(),
    /** Query */
    query: z.string().min(1),
    /** Entity filter scope applied to the option search */
    scopeFilter: EntityFilterSchema,
});
/**
 * Record representing a filter search request
 *
 * @openapiSchema EntityFilterSearch
 * @endpoint POST /v1/entities/filters/search
 * @contractShape entity.filter-search
 * @contractRole canonical
 */
export const EntityFilterSearchSchema = EntityFilterSearchSchemaDefinition;
//# sourceMappingURL=filter-search.js.map