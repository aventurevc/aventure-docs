// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchAiOverviewSchema } from "../search/ai-overview.js";
import { SearchAnswerBoxSchema } from "../search/answer-box.js";
import { SearchHitSchema } from "../search/hit.js";
import { SearchKnowledgeGraphSchema } from "../search/knowledge-graph.js";
import { SearchRelatedQuestionSchema } from "../search/related-question.js";
import { SearchSchema } from "../search/search.js";
import { SearchSportsResultSchema } from "../search/sports-result.js";
import { SourceDocumentListSchema } from "../source/document-list.js";
const WebSearchSchemaDefinition = z.object({
    /** Google's AI Overview: returned whenever Google answers inline or its deferred overview is stored (fetched by this or an earlier search that set `deferredAiOverview`); null when Google produced none or no such fetch stored its deferred overview */
    aiOverview: SearchAiOverviewSchema.nullish(),
    /** Google's direct answer box; null when the page shows none */
    answerBox: SearchAnswerBoxSchema.nullish(),
    /** Source-document ledger row backing this result */
    document: SourceDocumentListSchema,
    /** Google's knowledge panel; null when the page shows none */
    knowledgeGraph: SearchKnowledgeGraphSchema.nullish(),
    /** Google's "People also ask" questions; null when the page shows none */
    relatedQuestion: z.array(SearchRelatedQuestionSchema).nullish(),
    /** Google's related searches; null when the page shows none */
    relatedSearch: z.array(z.string()).nullish(),
    /** Normalized result items in provider rank order */
    result: z.array(SearchHitSchema),
    /** Web search request represented by this result */
    search: SearchSchema,
    /** Google's game spotlight; null when the page shows none */
    sportsResult: SearchSportsResultSchema.nullish(),
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