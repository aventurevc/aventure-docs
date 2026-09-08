// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Search strategy for a natural-language search request. `auto` keeps the server pipeline (exact-name shortcut first, planner otherwise); `exact` matches entity names exactly with no planner and no embedding; `keyword` runs full-text search; `semantic` runs vector similarity; `natural` always runs the language-model planner. Entity natural-search supports every mode; person natural-search rejects `exact`; news and federated search accept only `auto` and `keyword`; content search accepts only `auto`.
 *
 * @openapiSchema SearchMode
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/news
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema NaturalSearchSchema
 * @usedBySchema SearchModeExecutionSchema
 * @contractShape search.mode
 * @contractRole canonical
 */
export const SearchModeSchema = z.enum(["auto", "exact", "keyword", "semantic", "natural"]);
//# sourceMappingURL=mode.js.map