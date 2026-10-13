// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchAiOverviewReferenceSchemaDefinition = z.object({
    /** Citation number the answer text uses as `[index]` */
    index: z.int(),
    snippet: z.string().nullish(),
    /** Publisher name Google shows for the page */
    source: z.string().nullish(),
    title: z.string(),
    url: z.string(),
});
/**
 * One page Google's AI Overview cites
 *
 * @openapiSchema SearchAiOverviewReference
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchAiOverviewSchema
 * @contractShape search.ai-overview-reference
 * @contractRole canonical
 */
export const SearchAiOverviewReferenceSchema = SearchAiOverviewReferenceSchemaDefinition;
//# sourceMappingURL=ai-overview-reference.js.map