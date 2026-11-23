import { z } from "zod/v4";
declare const SignalFamilyScoreSchemaDefinition: z.ZodObject<{
    decayedWeight: z.ZodNumber;
    evidenceClass: z.ZodUnion<readonly [z.ZodEnum<{
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
    observationCount: z.ZodInt;
    signalFamily: z.ZodString;
}, z.core.$strip>;
type SignalFamilyScoreDefinition = z.infer<typeof SignalFamilyScoreSchemaDefinition>;
export interface SignalFamilyScoreSchemaInput extends z.input<typeof SignalFamilyScoreSchemaDefinition> {
}
/**
 * One signal family's combined, time-decayed weight in an estimate, with its strongest evidence class and how many observations it combined.
 *
 * @openapiSchema SignalFamilyScore
 * @endpoint GET /v1/entities/{entityId}/headcount-estimate
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityHeadcountEstimateSchema
 * @usedBySchema EntityRevenueEstimateSchema
 * @contractShape signal.family-score
 * @contractRole canonical
 */
export declare const SignalFamilyScoreSchema: z.ZodType<SignalFamilyScoreDefinition, SignalFamilyScoreSchemaInput>;
export type SignalFamilyScore = z.infer<typeof SignalFamilyScoreSchema>;
export {};
//# sourceMappingURL=family-score.d.ts.map