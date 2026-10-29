import { z } from "zod/v4";
declare const EntityAnalysisSectionVerificationSchemaDefinition: z.ZodObject<{
    failure: z.ZodArray<z.ZodType<{
        passage: string;
        problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
        proseProblem?: string | null | undefined;
        reason: string;
        rule: string;
    }, import("./analysis-verification-failure.ts").EntityAnalysisVerificationFailureSchemaInput, z.core.$ZodTypeInternals<{
        passage: string;
        problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
        proseProblem?: string | null | undefined;
        reason: string;
        rule: string;
    }, import("./analysis-verification-failure.ts").EntityAnalysisVerificationFailureSchemaInput>>>;
    key: z.ZodString;
    outcome: z.ZodEnum<{
        failed: "failed";
        passed: "passed";
    }>;
    passage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    problem: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        citedLegalPage: "citedLegalPage";
        invalidSection: "invalidSection";
        missingCitation: "missingCitation";
        notApplicable: "notApplicable";
        prose: "prose";
        quoteNotFound: "quoteNotFound";
        restatement: "restatement";
        unreadSource: "unreadSource";
    }>>>;
    prosePolicyVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proseProblem: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        chained: "chained";
        disclaimer: "disclaimer";
        factList: "factList";
        legalSource: "legalSource";
        marketing: "marketing";
        markup: "markup";
        mojibake: "mojibake";
        record: "record";
        source: "source";
        structured: "structured";
        temporal: "temporal";
        tense: "tense";
        textContract: "textContract";
        unsupported: "unsupported";
        voice: "voice";
    }>, z.ZodString]> & {
        enum: {
            chained: "chained";
            disclaimer: "disclaimer";
            factList: "factList";
            legalSource: "legalSource";
            marketing: "marketing";
            markup: "markup";
            mojibake: "mojibake";
            record: "record";
            source: "source";
            structured: "structured";
            temporal: "temporal";
            tense: "tense";
            textContract: "textContract";
            unsupported: "unsupported";
            voice: "voice";
        };
    }>>;
    rule: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    violation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityAnalysisSectionVerificationDefinition = z.infer<typeof EntityAnalysisSectionVerificationSchemaDefinition>;
export interface EntityAnalysisSectionVerificationSchemaInput extends z.input<typeof EntityAnalysisSectionVerificationSchemaDefinition> {
}
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
export declare const EntityAnalysisSectionVerificationSchema: z.ZodType<EntityAnalysisSectionVerificationDefinition, EntityAnalysisSectionVerificationSchemaInput>;
export type EntityAnalysisSectionVerification = z.infer<typeof EntityAnalysisSectionVerificationSchema>;
export {};
//# sourceMappingURL=analysis-section-verification.d.ts.map