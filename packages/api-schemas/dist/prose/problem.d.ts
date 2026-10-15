import { z } from "zod/v4";
/**
 * Why a sentence or paragraph of entity text or a research snippet was rejected.
 *
 * @openapiSchema ProseProblem
 * @standardProblemResponse
 * @usedBySchema ProseViolationSchema
 * @contractShape prose.problem
 * @contractRole canonical
 */
export declare const ProseProblemSchema: z.ZodUnion<readonly [z.ZodEnum<{
    chained: "chained";
    disclaimer: "disclaimer";
    factList: "factList";
    legalSource: "legalSource";
    marketing: "marketing";
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