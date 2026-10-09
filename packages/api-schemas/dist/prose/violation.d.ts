import { z } from "zod/v4";
declare const ProseViolationSchemaDefinition: z.ZodObject<{
    overridable: z.ZodBoolean;
    passage: z.ZodString;
    problem: z.ZodUnion<readonly [z.ZodEnum<{
        disclaimer: "disclaimer";
        factList: "factList";
        legalSource: "legalSource";
        mojibake: "mojibake";
        record: "record";
        source: "source";
        structured: "structured";
        temporal: "temporal";
        textContract: "textContract";
        voice: "voice";
    }>, z.ZodString]>;
    reason: z.ZodString;
}, z.core.$strip>;
type ProseViolationDefinition = z.infer<typeof ProseViolationSchemaDefinition>;
/**
 * One rejected passage and one problem it shows; a passage with several problems appears once per problem.
 *
 * @openapiSchema ProseViolation
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape prose.violation
 * @contractRole canonical
 */
export declare const ProseViolationSchema: z.ZodType<ProseViolationDefinition>;
export type ProseViolation = z.infer<typeof ProseViolationSchema>;
export {};
//# sourceMappingURL=violation.d.ts.map