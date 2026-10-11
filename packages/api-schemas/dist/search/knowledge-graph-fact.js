// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Knowledge panel fact name
 *
 * @openapiSchema SearchKnowledgeGraphFact
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchKnowledgeGraphAttributeSchema
 * @contractShape search.knowledge-graph-fact
 * @contractRole canonical
 */
export const SearchKnowledgeGraphFactSchema = z.union([
    z.enum(["founded", "ceo", "headquarters"]),
    z.string(),
]);
//# sourceMappingURL=knowledge-graph-fact.js.map