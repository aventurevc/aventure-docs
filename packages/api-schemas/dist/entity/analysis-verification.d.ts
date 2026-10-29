import { z } from "zod/v4";
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
export declare const EntityAnalysisVerificationSchema: z.ZodObject<{
    section: z.ZodArray<z.ZodType<{
        failure: {
            passage: string;
            problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
            proseProblem?: string | null | undefined;
            reason: string;
            rule: string;
        }[];
        key: string;
        outcome: "failed" | "passed";
        passage?: string | null | undefined;
        problem?: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource" | null | undefined;
        prosePolicyVersion?: string | null | undefined;
        proseProblem?: string | null | undefined;
        rule?: string | null | undefined;
        violation?: string | null | undefined;
    }, import("./analysis-section-verification.ts").EntityAnalysisSectionVerificationSchemaInput, z.core.$ZodTypeInternals<{
        failure: {
            passage: string;
            problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
            proseProblem?: string | null | undefined;
            reason: string;
            rule: string;
        }[];
        key: string;
        outcome: "failed" | "passed";
        passage?: string | null | undefined;
        problem?: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource" | null | undefined;
        prosePolicyVersion?: string | null | undefined;
        proseProblem?: string | null | undefined;
        rule?: string | null | undefined;
        violation?: string | null | undefined;
    }, import("./analysis-section-verification.ts").EntityAnalysisSectionVerificationSchemaInput>>>;
    version: z.ZodInt;
}, z.core.$strip>;
export type EntityAnalysisVerification = z.infer<typeof EntityAnalysisVerificationSchema>;
//# sourceMappingURL=analysis-verification.d.ts.map