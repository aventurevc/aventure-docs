// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterGapReasonSchema } from "./gap-reason.js";
const WriterGapSchemaDefinition = z.object({
    /** Evidence claim numbers supporting the gap; cite at least one for a CONFLICTING gap, or use an empty list when nothing was found. */
    claim: z.array(z.int()),
    /** Why the gap is present. */
    reason: WriterGapReasonSchema,
    /** What is missing or unresolved. */
    statement: z.string(),
});
/**
 * A known evidence gap or conflict.
 *
 * @openapiSchema WriterGap
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.gap
 * @contractRole canonical
 */
export const WriterGapSchema = WriterGapSchemaDefinition;
//# sourceMappingURL=gap.js.map