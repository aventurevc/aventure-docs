// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchAnswerWebSourceSchemaDefinition = z.object({
    /** Title of the cited page as the search result named it. */
    title: z.string(),
    /** Address of the cited page. */
    url: z.string(),
});
/**
 * A web search result an answer paragraph cites, by its page.
 *
 * @openapiSchema SearchAnswerWebSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerParagraphSchema
 * @contractShape search.answer-web-source
 * @contractRole canonical
 */
export const SearchAnswerWebSourceSchema = SearchAnswerWebSourceSchemaDefinition;
//# sourceMappingURL=answer-web-source.js.map