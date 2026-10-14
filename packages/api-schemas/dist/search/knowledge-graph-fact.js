// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchKnowledgeGraphFactSchemaKnownMembers = z.enum(["founded", "ceo", "headquarters"]);
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
export const SearchKnowledgeGraphFactSchema = Object.assign(z.union([SearchKnowledgeGraphFactSchemaKnownMembers, z.string()]), { enum: SearchKnowledgeGraphFactSchemaKnownMembers.enum });
//# sourceMappingURL=knowledge-graph-fact.js.map