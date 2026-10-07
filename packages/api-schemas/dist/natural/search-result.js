// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "../entity/list.js";
import { EntitySimilarityResultSchema } from "../entity/similarity-result.js";
import { PageResultEntityListSchema } from "../pagination/schemas.js";
import { SearchAnswerSchema } from "../search/answer.js";
import { SearchInterpretationSchema } from "../search/interpretation.js";
import { SearchInvestmentSchema } from "../search/investment.js";
import { SearchJudgmentSchema } from "../search/judgment.js";
import { SearchPassageSchema } from "../search/passage.js";
const NaturalSearchResultSchemaDefinition = z.object({
    /** Written answer grounded in the subject, peer, and result records and the passages; null unless the request asks for the `synthesis` layer. */
    answer: SearchAnswerSchema.nullish(),
    /** Structured interpretation used to run the entity list query. */
    interpretation: SearchInterpretationSchema,
    /** Recorded investment participation supporting investor discovery. Each row keeps its entity or personal investor, portfolio company, transaction attribution, and query-matched offering evidence. Empty for other question intents. */
    investment: z.array(SearchInvestmentSchema),
    /** Judged rows of the `result` page for a competitor, market, or provider question: the same entities in the same order, each with its judged probability. Empty for other questions. */
    judgment: z.array(SearchJudgmentSchema),
    /** Passages that best answer the question, ranked by score; empty unless the request asks for the `passage` layer. */
    passage: z.array(SearchPassageSchema),
    /** Curated competitors of the single subject entity for `peer` questions; semantic look-alikes are the result page. Empty otherwise. */
    peer: z.array(EntitySimilarityResultSchema),
    /** Web searches for this question not yet stored; their evidence joins a later request. Empty without the `web` layer. */
    pendingWebQuery: z.array(z.string()),
    /** Entity list page returned by the canonical entity list engine. */
    result: PageResultEntityListSchema,
    /** Id of this search's stored record; send it with createSearchInteraction to record which results the user selected or opened. Null when the search was not recorded. */
    searchRequestId: z.uuid().nullish(),
    /** Entities the question is about, one per resolved subject name, in query order; empty when the question names none or none resolves. */
    subject: z.array(EntityListSchema),
});
/**
 * Natural-language entity search result: planner interpretation plus the canonical entity list page produced by EntityListService.
 *
 * @openapiSchema NaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape natural.search-result
 * @contractRole canonical
 */
export const NaturalSearchResultSchema = NaturalSearchResultSchemaDefinition;
//# sourceMappingURL=search-result.js.map