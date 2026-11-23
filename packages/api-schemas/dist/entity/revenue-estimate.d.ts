import { z } from "zod/v4";
declare const EntityRevenueEstimateSchemaDefinition: z.ZodObject<{
    concordanceScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    coverageTier: z.ZodInt;
    currency: z.ZodString;
    dataConfidence: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    directSignalCount: z.ZodInt;
    driver: z.ZodArray<z.ZodType<{
        direction: "down" | "up";
        evidenceClass?: string | null | undefined;
        impactMultiplier: number;
        label: string;
        signalFamily?: string | null | undefined;
    }, import("../revenue/driver-contribution.ts").RevenueDriverContributionSchemaInput, z.core.$ZodTypeInternals<{
        direction: "down" | "up";
        evidenceClass?: string | null | undefined;
        impactMultiplier: number;
        label: string;
        signalFamily?: string | null | undefined;
    }, import("../revenue/driver-contribution.ts").RevenueDriverContributionSchemaInput>>>;
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
    indirectSignalCount: z.ZodInt;
    inferredSignalCount: z.ZodInt;
    modelVersion: z.ZodString;
    p10Usd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    p25Usd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    p50Usd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    p75Usd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    p90Usd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    pointEstimateUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    preRevenue: z.ZodBoolean;
    preRevenueProbability: z.ZodNumber;
    regime: z.ZodUnion<readonly [z.ZodEnum<{
        financialAum: "financialAum";
        reportedRegulatory: "reportedRegulatory";
        traditionalOperating: "traditionalOperating";
        vcTechSaas: "vcTechSaas";
    }>, z.ZodString]> & {
        enum: {
            financialAum: "financialAum";
            reportedRegulatory: "reportedRegulatory";
            traditionalOperating: "traditionalOperating";
            vcTechSaas: "vcTechSaas";
        };
    };
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
type EntityRevenueEstimateDefinition = z.infer<typeof EntityRevenueEstimateSchemaDefinition>;
export interface EntityRevenueEstimateSchemaInput extends z.input<typeof EntityRevenueEstimateSchemaDefinition> {
}
/**
 * An entity's current annual revenue estimate: revenue model, pre-revenue probability, percentiles, drivers, and the evidence class, confidence, and per-family signals behind it.
 *
 * @openapiSchema EntityRevenueEstimate
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @contractShape entity.revenue-estimate
 * @contractRole canonical
 */
export declare const EntityRevenueEstimateSchema: z.ZodType<EntityRevenueEstimateDefinition, EntityRevenueEstimateSchemaInput>;
export type EntityRevenueEstimate = z.infer<typeof EntityRevenueEstimateSchema>;
export {};
//# sourceMappingURL=revenue-estimate.d.ts.map