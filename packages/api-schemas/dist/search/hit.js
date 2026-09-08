// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchHitSchemaDefinition = z.object({
    relevanceScore: z.number(),
    snippet: z.string(),
    title: z.string(),
    url: z.string(),
});
/**
 * One normalized web-search hit with its title, URL, snippet, and relevance score
 *
 * @openapiSchema SearchHit
 * @endpoint POST /v1/search/web
 * @usedBySchema WebSearchSchema
 * @contractShape search.hit
 * @contractRole canonical
 */
export const SearchHitSchema = SearchHitSchemaDefinition;
//# sourceMappingURL=hit.js.map