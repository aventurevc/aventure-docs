import { z } from "zod/v4";
/**
 * Why this record is suppressed: it stays hidden for good, and its stored facts (names, URLs, addresses, entity-person joins) block creating or showing the same subject again. placeholderContent: sample or boilerplate content, often AI-written template copy, presented as a real organization or person. deceptive: a profile built to mislead. A request to be removed is never a reason: aVenture does not delete or hide accurate research profiles.
 *
 * @openapiSchema SuppressionReason
 * @endpoint GET /v1/people
 * @contractShape suppression.reason
 * @contractRole canonical
 */
export declare const SuppressionReasonSchema: z.ZodUnion<readonly [z.ZodEnum<{
    deceptive: "deceptive";
    placeholderContent: "placeholderContent";
}>, z.ZodString]> & {
    enum: {
        deceptive: "deceptive";
        placeholderContent: "placeholderContent";
    };
};
export type SuppressionReason = z.infer<typeof SuppressionReasonSchema>;
//# sourceMappingURL=reason.d.ts.map