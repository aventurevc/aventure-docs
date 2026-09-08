// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFilterSearchResultSchemaDefinition = z.object({
    /** Canonical filter key searched */
    filterKey: z.string(),
    /** Matching option values */
    result: z.array(z.string()),
});
/**
 * Typeahead search result pairing a filter key with matching option values
 *
 * @openapiSchema EntityFilterSearchResult
 * @endpoint GET /v1/entities/filters/search
 * @endpoint GET /v1/people/filters/search
 * @endpoint POST /v1/entities/filters/search
 * @contractShape entity.filter-search-result
 * @contractRole canonical
 */
export const EntityFilterSearchResultSchema = EntityFilterSearchResultSchemaDefinition;
//# sourceMappingURL=filter-search-result.js.map