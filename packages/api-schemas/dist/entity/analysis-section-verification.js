// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisVerificationFailureSchema } from "./analysis-verification-failure.js";
import { ProseProblemSchema } from "../prose/problem.js";
const EntityAnalysisSectionVerificationSchemaDefinition = z.object({
    failure: z.array(EntityAnalysisVerificationFailureSchema),
    key: z.string(),
    outcome: z.enum(["passed", "failed"]),
    passage: z.string().nullish(),
    problem: z
        .enum([
        "invalidSection",
        "notApplicable",
        "missingCitation",
        "unreadSource",
        "quoteNotFound",
        "citedLegalPage",
        "restatement",
        "prose",
    ])
        .nullish(),
    prosePolicyVersion: z.string().nullish(),
    proseProblem: ProseProblemSchema.nullish(),
    rule: z.string().nullish(),
    violation: z.string().nullish(),
});
/**
 * @openapiSchema EntityAnalysisSectionVerification
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisVerificationSchema
 * @contractShape entity.analysis-section-verification
 * @contractRole canonical
 */
export const EntityAnalysisSectionVerificationSchema = EntityAnalysisSectionVerificationSchemaDefinition;
//# sourceMappingURL=analysis-section-verification.js.map