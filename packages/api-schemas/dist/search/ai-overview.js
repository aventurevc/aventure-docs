// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchAiOverviewReferenceSchema } from "./ai-overview-reference.js";
/**
 * Google's AI Overview for a web search: its generated answer and the pages it cites
 *
 * @openapiSchema SearchAiOverview
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.ai-overview
 * @contractRole canonical
 */
export const SearchAiOverviewSchema = z.object({
    /** Pages the answer cites */
    reference: z.array(SearchAiOverviewReferenceSchema),
    /** Generated answer as Markdown in Google's block order; `[n]` cites the reference whose `index` is n */
    text: z.string(),
});
//# sourceMappingURL=ai-overview.js.map