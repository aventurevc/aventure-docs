import { z } from "zod/v4";
/**
 * Coverage verdict for one completion gate on the assembled entity detail. NOT_EVALUABLE is not a failure and is not closed by evidence: the detail does not carry this gate at all, so only the gate's owningRead can grade it.
 *
 * @openapiSchema CompletionGateCoverage
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @usedBySchema EntityDetailCoverageSlotSchema
 * @contractShape completion.gate-coverage
 * @contractRole canonical
 */
export declare const CompletionGateCoverageSchema: z.ZodEnum<{
    ABSENT: "ABSENT";
    NOT_EVALUABLE: "NOT_EVALUABLE";
    PRESENT: "PRESENT";
}>;
export type CompletionGateCoverage = z.infer<typeof CompletionGateCoverageSchema>;
//# sourceMappingURL=gate-coverage.d.ts.map