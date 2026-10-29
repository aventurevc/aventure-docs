// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisSectionVerificationSchema } from "./analysis-section-verification.js";
/**
 * @openapiSchema EntityAnalysisVerification
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisDraftSchema
 * @contractShape entity.analysis-verification
 * @contractRole canonical
 */
export const EntityAnalysisVerificationSchema = z.object({
    section: z.array(EntityAnalysisSectionVerificationSchema),
    version: z.int(),
});
//# sourceMappingURL=analysis-verification.js.map