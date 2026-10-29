// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ProseProblemSchema } from "../prose/problem.js";
const EntityAnalysisVerificationFailureSchemaDefinition = z.object({
    passage: z.string(),
    problem: z.enum([
        "invalidSection",
        "notApplicable",
        "missingCitation",
        "unreadSource",
        "quoteNotFound",
        "citedLegalPage",
        "restatement",
        "prose",
    ]),
    proseProblem: ProseProblemSchema.nullish(),
    reason: z.string(),
    rule: z.string(),
});
/**
 * @openapiSchema EntityAnalysisVerificationFailure
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionVerificationSchema
 * @contractShape entity.analysis-verification-failure
 * @contractRole canonical
 */
export const EntityAnalysisVerificationFailureSchema = EntityAnalysisVerificationFailureSchemaDefinition;
//# sourceMappingURL=analysis-verification-failure.js.map