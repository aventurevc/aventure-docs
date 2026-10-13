// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { SearchAnswerCitationSchema } from "./answer-citation.js";
import { SearchAnswerParagraphSchema } from "./answer-paragraph.js";
/**
 * Written answer to a natural-language question, grounded only in the response's entity records and passages. LOW confidence with no paragraph means the evidence does not answer the question.
 *
 * @openapiSchema SearchAnswer
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.answer
 * @contractRole canonical
 */
export const SearchAnswerSchema = z.object({
    /** Evidence the paragraphs cite, in first-use order. */
    citation: z.array(SearchAnswerCitationSchema),
    /** How fully the cited evidence answers the question. */
    confidence: ConfidenceSchema,
    /** The answer's paragraphs in reading order, each citing the evidence it rests on; empty when the answer abstains. A first paragraph without `topic` is the lead, written as a standalone answer of one or two sentences that reads complete when shown alone; later paragraphs expand it by topic without restating it. */
    paragraph: z.array(SearchAnswerParagraphSchema),
    /** Up to five follow-up searches grounded in the cited evidence; empty when the answer abstains. */
    relatedQuery: z.array(z.string()),
    /** Every paragraph's text in reading order, separated by blank lines; read `paragraph` to place each citation beside the text it supports. */
    text: z.string(),
});
//# sourceMappingURL=answer.js.map