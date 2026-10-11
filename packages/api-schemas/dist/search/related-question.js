// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchRelatedQuestionSchemaDefinition = z.object({
    /** Question text */
    question: z.string(),
    /** Answer snippet; null when Google answers the question with an AI Overview */
    snippet: z.string().nullish(),
    /** Title of the page the snippet comes from */
    title: z.string().nullish(),
    /** URL of the page the snippet comes from */
    url: z.string().nullish(),
});
/**
 * One "People also ask" question Google shows for the query
 *
 * @openapiSchema SearchRelatedQuestion
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.related-question
 * @contractRole canonical
 */
export const SearchRelatedQuestionSchema = SearchRelatedQuestionSchemaDefinition;
//# sourceMappingURL=related-question.js.map