// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisToolSchema } from "./analysis-tool.js";
/**
 * One analysis tool invocation
 *
 * @openapiSchema EntityAnalysisInvocation
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @endpoint POST /v1/research/runs/{runId}/turns
 * @usedBySchema HarnessRunTurnSchema
 * @contractShape entity.analysis-invocation
 * @contractRole canonical
 */
export const EntityAnalysisInvocationSchema = z.object({
    /** Instruction for the tool within the conversation turn character limit */
    instruction: z.string().nullish(),
    /** Exact snippet catalog typeValue; required for RENDER_SECTION */
    sectionKey: z.string().nullish(),
    /** Analysis tool to invoke */
    tool: EntityAnalysisToolSchema,
});
//# sourceMappingURL=analysis-invocation.js.map