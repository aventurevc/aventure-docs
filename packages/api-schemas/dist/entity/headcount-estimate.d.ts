import { z } from "zod/v4";
declare const EntityHeadcountEstimateSchemaDefinition: z.ZodObject<{
    concordanceScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    coverageTier: z.ZodInt;
    dataConfidence: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    directSignalCount: z.ZodInt;
    effectiveSignalMass: z.ZodNumber;
    entityId: z.ZodUUID;
    estimatedAt: z.ZodISODateTime;
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
    growth12mPct: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    growth6mPct: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    indirectSignalCount: z.ZodInt;
    inferredSignalCount: z.ZodInt;
    modelVersion: z.ZodString;
    p10: z.ZodInt;
    p25: z.ZodInt;
    p50: z.ZodInt;
    p75: z.ZodInt;
    p90: z.ZodInt;
    pointEstimate: z.ZodInt;
    signalBreakdown: z.ZodArray<z.ZodType<{
        decayedWeight: number;
        evidenceClass: string;
        observationCount: number;
        signalFamily: string;
    }, import("../signal/family-score.ts").SignalFamilyScoreSchemaInput, z.core.$ZodTypeInternals<{
        decayedWeight: number;
        evidenceClass: string;
        observationCount: number;
        signalFamily: string;
    }, import("../signal/family-score.ts").SignalFamilyScoreSchemaInput>>>;
}, z.core.$strip>;
type EntityHeadcountEstimateDefinition = z.infer<typeof EntityHeadcountEstimateSchemaDefinition>;
export interface EntityHeadcountEstimateSchemaInput extends z.input<typeof EntityHeadcountEstimateSchemaDefinition> {
}
/**
 * An entity's current headcount estimate: point estimate and percentiles, growth, and the evidence class, confidence, and per-family signals behind it.
 *
 * @openapiSchema EntityHeadcountEstimate
 * @endpoint GET /v1/entities/{entityId}/headcount-estimate
 * @contractShape entity.headcount-estimate
 * @contractRole canonical
 */
export declare const EntityHeadcountEstimateSchema: z.ZodType<EntityHeadcountEstimateDefinition, EntityHeadcountEstimateSchemaInput>;
export type EntityHeadcountEstimate = z.infer<typeof EntityHeadcountEstimateSchema>;
export {};
//# sourceMappingURL=headcount-estimate.d.ts.map