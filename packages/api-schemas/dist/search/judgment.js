// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
const SearchJudgmentSchemaDefinition = z.object({
    /** Id of the answering entity; its row is in `result`. */
    entityId: z.uuid(),
    /** Current public Product/Service that supports this answer. */
    matchedOffering: EntitySchema.nullish(),
    /** Judged probability, 0 to 1, that the entity answers the question. */
    probability: z.number(),
    /** Stored web search result pages that name the entity; empty without `web`. */
    webUrl: z.array(z.string()),
});
/**
 * An entity that answers a competitor, market, or provider question, with the judged probability that it does.
 *
 * @openapiSchema SearchJudgment
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.judgment
 * @contractRole canonical
 */
export const SearchJudgmentSchema = SearchJudgmentSchemaDefinition;
//# sourceMappingURL=judgment.js.map