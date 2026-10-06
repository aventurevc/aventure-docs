// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchAnswerCitationSchema } from "./answer-citation.js";
const SearchAnswerParagraphSchemaDefinition = z.object({
    /** Evidence this paragraph rests on, most important first. */
    citation: z.array(SearchAnswerCitationSchema),
    /** Paragraph text in plain prose. */
    text: z.string(),
    /** Short label naming the category, market, or segment this paragraph covers, such as "Smartphones · North America"; absent on the lead paragraph. */
    topic: z.string().nullish(),
});
/**
 * One paragraph of an answer and the evidence it rests on.
 *
 * @openapiSchema SearchAnswerParagraph
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema SearchAnswerSchema
 * @contractShape search.answer-paragraph
 * @contractRole canonical
 */
export const SearchAnswerParagraphSchema = SearchAnswerParagraphSchemaDefinition;
//# sourceMappingURL=answer-paragraph.js.map