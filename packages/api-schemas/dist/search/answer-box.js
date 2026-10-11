// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Google's direct answer shown above the results
 *
 * @openapiSchema SearchAnswerBox
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.answer-box
 * @contractRole canonical
 */
export const SearchAnswerBoxSchema = z.object({
    /** Direct answer text; Google's snippet when the box states no separate answer */
    answer: z.string(),
    /** Supporting snippet the box shows */
    snippet: z.string().nullish(),
    /** Title of the page the answer comes from */
    title: z.string().nullish(),
    /** Google's answer-box kind */
    type: z.string().nullish(),
    /** URL of the page the answer comes from */
    url: z.string().nullish(),
});
//# sourceMappingURL=answer-box.js.map