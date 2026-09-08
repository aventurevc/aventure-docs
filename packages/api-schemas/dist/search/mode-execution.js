// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchModeSchema } from "./mode.js";
const SearchModeExecutionSchemaDefinition = z.object({
    /** Search mode requested by the caller. */
    modeRequested: SearchModeSchema,
    /** Search mode executed by the canonical engine. */
    modeUsed: SearchModeSchema,
});
/**
 * Search strategy requested by the caller and executed by the canonical engine.
 *
 * @openapiSchema SearchModeExecution
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchProvenanceSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.mode-execution
 * @contractRole canonical
 */
export const SearchModeExecutionSchema = SearchModeExecutionSchemaDefinition;
//# sourceMappingURL=mode-execution.js.map