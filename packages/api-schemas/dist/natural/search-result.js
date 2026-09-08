// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageResultEntityListSchema } from "../pagination/schemas.js";
import { SearchInterpretationSchema } from "../search/interpretation.js";
const NaturalSearchResultSchemaDefinition = z.object({
    /** Structured interpretation used to run the entity list query. */
    interpretation: SearchInterpretationSchema,
    /** Entity list page returned by the canonical entity list engine. */
    result: PageResultEntityListSchema,
});
/**
 * Natural-language entity search result: planner interpretation plus the canonical entity list page produced by EntityListService.
 *
 * @openapiSchema NaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape natural.search-result
 * @contractRole canonical
 */
export const NaturalSearchResultSchema = NaturalSearchResultSchemaDefinition;
//# sourceMappingURL=search-result.js.map