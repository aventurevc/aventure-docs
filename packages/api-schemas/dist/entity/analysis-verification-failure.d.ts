import { z } from "zod/v4";
declare const EntityAnalysisVerificationFailureSchemaDefinition: z.ZodObject<{
    passage: z.ZodString;
    problem: z.ZodEnum<{
        citedLegalPage: "citedLegalPage";
        invalidSection: "invalidSection";
        missingCitation: "missingCitation";
        notApplicable: "notApplicable";
        prose: "prose";
        quoteNotFound: "quoteNotFound";
        restatement: "restatement";
        unreadSource: "unreadSource";
    }>;
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
    reason: z.ZodString;
    rule: z.ZodString;
}, z.core.$strip>;
type EntityAnalysisVerificationFailureDefinition = z.infer<typeof EntityAnalysisVerificationFailureSchemaDefinition>;
export interface EntityAnalysisVerificationFailureSchemaInput extends z.input<typeof EntityAnalysisVerificationFailureSchemaDefinition> {
}
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
export declare const EntityAnalysisVerificationFailureSchema: z.ZodType<EntityAnalysisVerificationFailureDefinition, EntityAnalysisVerificationFailureSchemaInput>;
export type EntityAnalysisVerificationFailure = z.infer<typeof EntityAnalysisVerificationFailureSchema>;
export {};
//# sourceMappingURL=analysis-verification-failure.d.ts.map