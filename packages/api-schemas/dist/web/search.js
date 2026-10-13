// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchAiOverviewSchema } from "../search/ai-overview.js";
import { SearchHitSchema } from "../search/hit.js";
import { SearchSchema } from "../search/search.js";
import { SourceDocumentListSchema } from "../source/document-list.js";
const WebSearchSchemaDefinition = z.object({
    /** Google's AI Overview: returned whenever Google answers inline or its deferred overview is stored (fetched in the background after an earlier search, or waited for with `deferredAiOverview`); null when Google produced none or its deferred overview is not stored yet */
    aiOverview: SearchAiOverviewSchema.nullish(),
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
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @contractShape web.search
 * @contractRole canonical
 */
export const WebSearchSchema = WebSearchSchemaDefinition;
//# sourceMappingURL=search.js.map