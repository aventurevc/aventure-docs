// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { SearchAnswerCitationSchema } from "./answer-citation.js";
/**
 * Written answer to a natural-language question, grounded only in the response's entity records and passages. LOW confidence with no citation means the evidence does not answer the question.
 *
 * @openapiSchema SearchAnswer
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.answer
 * @contractRole canonical
 */
export const SearchAnswerSchema = z.object({
    /** Evidence each claim rests on, in first-use order. */
    citation: z.array(SearchAnswerCitationSchema),
    /** How fully the cited evidence answers the question. */
    confidence: ConfidenceSchema,
    /** Answer text in plain prose. */
    text: z.string(),
});
//# sourceMappingURL=answer.js.map