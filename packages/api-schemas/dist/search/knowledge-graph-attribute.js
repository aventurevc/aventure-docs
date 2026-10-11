// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchKnowledgeGraphFactSchema } from "./knowledge-graph-fact.js";
const SearchKnowledgeGraphAttributeSchemaDefinition = z.object({
    /** Fact the panel labels */
    name: SearchKnowledgeGraphFactSchema,
    /** Value as the panel states it */
    value: z.string(),
});
/**
 * One fact Google's knowledge panel states
 *
 * @openapiSchema SearchKnowledgeGraphAttribute
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchKnowledgeGraphSchema
 * @contractShape search.knowledge-graph-attribute
 * @contractRole canonical
 */
export const SearchKnowledgeGraphAttributeSchema = SearchKnowledgeGraphAttributeSchemaDefinition;
//# sourceMappingURL=knowledge-graph-attribute.js.map