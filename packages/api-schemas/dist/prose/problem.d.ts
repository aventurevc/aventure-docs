import { z } from "zod/v4";
/**
 * Why a sentence or paragraph of entity text or a research snippet was rejected.
 *
 * @openapiSchema ProseProblem
 * @standardProblemResponse
 * @usedBySchema EntityAnalysisSectionVerificationSchema
 * @usedBySchema EntityAnalysisVerificationFailureSchema
 * @usedBySchema ProseViolationSchema
 * @contractShape prose.problem
 * @contractRole canonical
 */
export declare const ProseProblemSchema: z.ZodUnion<readonly [z.ZodEnum<{
    analysis: "analysis";
    chained: "chained";
    disclaimer: "disclaimer";
    evidenceAuthority: "evidenceAuthority";
    factList: "factList";
    internalRepetition: "internalRepetition";
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
        analysis: "analysis";
        chained: "chained";
        disclaimer: "disclaimer";
        evidenceAuthority: "evidenceAuthority";
        factList: "factList";
        internalRepetition: "internalRepetition";
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
};
export type ProseProblem = z.infer<typeof ProseProblemSchema>;
//# sourceMappingURL=problem.d.ts.map