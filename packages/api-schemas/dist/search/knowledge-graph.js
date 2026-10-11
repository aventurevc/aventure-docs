// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchKnowledgeGraphAttributeSchema } from "./knowledge-graph-attribute.js";
/**
 * Google's knowledge panel for the entity the query names
 *
 * @openapiSchema SearchKnowledgeGraph
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.knowledge-graph
 * @contractRole canonical
 */
export const SearchKnowledgeGraphSchema = z.object({
    /** Facts the panel states, such as founding date, CEO, and headquarters */
    attribute: z.array(SearchKnowledgeGraphAttributeSchema).nullish(),
    /** Entity description the panel shows */
    description: z.string().nullish(),
    /** Entity name the panel shows */
    title: z.string().nullish(),
    /** Entity kind Google states */
    type: z.string().nullish(),
    /** Official website the panel links */
    website: z.string().nullish(),
});
//# sourceMappingURL=knowledge-graph.js.map