import { z } from "zod/v4";
/**
 * Three-tier evidence hierarchy: direct statutory/verified filings, indirect operational signals, or inferred statistical priors.
 *
 * @openapiSchema SignalEvidenceClass
 * @endpoint GET /v1/entities/{entityId}/headcount-estimate
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityHeadcountEstimateSchema
 * @usedBySchema EntityRevenueEstimateSchema
 * @usedBySchema RevenueDriverContributionSchema
 * @usedBySchema SignalFamilyScoreSchema
 * @contractShape signal.evidence-class
 * @contractRole canonical
 */
export declare const SignalEvidenceClassSchema: z.ZodUnion<readonly [z.ZodEnum<{
    direct: "direct";
    indirect: "indirect";
    inferred: "inferred";
}>, z.ZodString]> & {
    enum: {
        direct: "direct";
        indirect: "indirect";
        inferred: "inferred";
    };
};
export type SignalEvidenceClass = z.infer<typeof SignalEvidenceClassSchema>;
//# sourceMappingURL=evidence-class.d.ts.map