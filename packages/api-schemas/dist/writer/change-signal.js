// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterChangeSignalSchemaDefinition = z.object({
    /** Evidence claim numbers supporting the signal. */
    claim: z.array(z.int()),
    /** Observable signal that would change the view. */
    statement: z.string(),
});
/**
 * Evidence that would change the supplied judgment.
 *
 * @openapiSchema WriterChangeSignal
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.change-signal
 * @contractRole canonical
 */
export const WriterChangeSignalSchema = WriterChangeSignalSchemaDefinition;
//# sourceMappingURL=change-signal.js.map