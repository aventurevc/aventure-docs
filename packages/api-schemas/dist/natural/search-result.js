// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityListSchema } from "../entity/list.js";
import { EntitySimilarityResultSchema } from "../entity/similarity-result.js";
import { PageResultEntityListSchema } from "../pagination/schemas.js";
import { SearchAnswerSchema } from "../search/answer.js";
import { SearchInterpretationSchema } from "../search/interpretation.js";
import { SearchPassageSchema } from "../search/passage.js";
const NaturalSearchResultSchemaDefinition = z.object({
    /** Written answer grounded in the subject, peer, and result records and the passages; null unless the request asks for the `synthesis` layer. */
    answer: SearchAnswerSchema.nullish(),
    /** Structured interpretation used to run the entity list query. */
    interpretation: SearchInterpretationSchema,
    /** Passages that best answer the question, ranked by score; empty unless the request asks for the `passage` layer. */
    passage: z.array(SearchPassageSchema),
    /** Curated competitors of the single subject entity for `peer` questions; semantic look-alikes are the result page. Empty otherwise. */
    peer: z.array(EntitySimilarityResultSchema),
    /** Entity list page returned by the canonical entity list engine. */
    result: PageResultEntityListSchema,
    /** Entities the question is about, one per resolved subject name, in query order; empty when the question names none or none resolves. */
    subject: z.array(EntityListSchema),
});
/**
 * Natural-language entity search result: planner interpretation plus the canonical entity list page produced by EntityListService.
 *
 * @openapiSchema NaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema FederatedSearchSchema
 * @contractShape natural.search-result
 * @contractRole canonical
 */
export const NaturalSearchResultSchema = NaturalSearchResultSchemaDefinition;
//# sourceMappingURL=search-result.js.map