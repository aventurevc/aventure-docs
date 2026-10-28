// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Analysis tool
 *
 * @openapiSchema EntityAnalysisTool
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @endpoint POST /v1/research/runs/{runId}/turns
 * @usedBySchema EntityAnalysisInvocationSchema
 * @contractShape entity.analysis-tool
 * @contractRole canonical
 */
export const EntityAnalysisToolSchema = z.enum(["RENDER_SECTION", "LIST_SECTION"]);
//# sourceMappingURL=analysis-tool.js.map