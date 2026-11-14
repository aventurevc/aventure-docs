// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NaturalSearchSchema } from "../natural/search.js";
import { SearchInterpretationSchema } from "../search/interpretation.js";
/**
 * The original search request and the interpretation the reader wants checked.
 *
 * @openapiSchema ResearchRunSearchContext
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape research.run-search-context
 * @contractRole canonical
 */
export const ResearchRunSearchContextSchema = z.object({
    interpretation: SearchInterpretationSchema,
    search: NaturalSearchSchema,
});
//# sourceMappingURL=run-search-context.js.map