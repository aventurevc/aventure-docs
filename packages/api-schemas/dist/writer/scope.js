// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterScopeSchemaDefinition = z.object({
    /** Market, company, or question boundary. */
    boundary: z.string(),
    /** Geography when the evidence is geographically bounded. */
    geography: z.string().nullish(),
    /** Research period when the evidence is time-bounded. */
    period: z.string().nullish(),
});
/**
 * Research boundary used by a writer brief.
 *
 * @openapiSchema WriterScope
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.scope
 * @contractRole canonical
 */
export const WriterScopeSchema = WriterScopeSchemaDefinition;
//# sourceMappingURL=scope.js.map