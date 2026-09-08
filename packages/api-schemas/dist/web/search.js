// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchHitSchema } from "../search/hit.js";
import { SearchSchema } from "../search/search.js";
import { SourceDocumentListSchema } from "../source/document-list.js";
const WebSearchSchemaDefinition = z.object({
    /** Source-document ledger row backing this result */
    document: SourceDocumentListSchema,
    /** Normalized result items in provider rank order */
    result: z.array(SearchHitSchema),
    /** Web search request represented by this result */
    search: SearchSchema,
});
/**
 * Live web search result with its backing source-document row and normalized items
 *
 * @openapiSchema WebSearch
 * @endpoint POST /v1/search/web
 * @contractShape web.search
 * @contractRole canonical
 */
export const WebSearchSchema = WebSearchSchemaDefinition;
//# sourceMappingURL=search.js.map