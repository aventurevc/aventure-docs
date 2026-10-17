// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "./filter.js";
const EntityFilterSearchSchemaDefinition = z.strictObject({
    /** Filter key */
    filterKey: z.string().min(1),
    /** Maximum number of search results; omit for 20, or the filter's own limit when that is smaller. A larger value returns the filter's limit. */
    limit: z.int().min(1).default(20).optional(),
    /** Query */
    query: z.string().min(1),
    /** Entity filter scope applied to the option search. Omit to search every eligible entity. */
    scopeFilter: EntityFilterSchema.optional(),
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