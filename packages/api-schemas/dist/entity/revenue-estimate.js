// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
import { RevenueDriverContributionSchema } from "../revenue/driver-contribution.js";
import { RevenueEstimateRegimeSchema } from "../revenue/estimate-regime.js";
import { SignalEvidenceClassSchema } from "../signal/evidence-class.js";
import { SignalFamilyScoreSchema } from "../signal/family-score.js";
const EntityRevenueEstimateSchemaDefinition = z.object({
    /** Agreement of the families' point estimates from 0 to 1; 1 is full agreement. */
    concordanceScore: z.number().min(0).max(1).nullish(),
    /** 1 when a direct or indirect signal is active, 2 when only statistical priors are, 0 when no signal is. */
    coverageTier: z.int(),
    /** ISO 4217 currency of the amounts; always USD. */
    currency: z.string(),
    /** Confidence tier the evidence supports. */
    dataConfidence: EntityValuationDataConfidenceSchema,
    /** Signal families whose strongest active evidence is direct. */
    directSignalCount: z.int(),
    /** Each estimation method's share of the blended estimate. */
    driver: z.array(RevenueDriverContributionSchema),
    /** Sum over signal families of ln(1 + family weight); independent families add, redundant snapshots saturate. */
    effectiveSignalMass: z.number(),
    /** Entity id (UUID). */
    entityId: z.uuid(),
    /** When this estimate was computed. */
    estimatedAt: z.iso.datetime({ offset: true }),
    /** Strongest evidence class among the active signal families. */
    evidenceClass: SignalEvidenceClassSchema,
    /** Signal families whose strongest active evidence is indirect. */
    indirectSignalCount: z.int(),
    /** Signal families whose strongest active evidence is inferred. */
    inferredSignalCount: z.int(),
    /** Estimation model version that produced this estimate. */
    modelVersion: z.string(),
    /** 10th-percentile annual revenue in USD. */
    p10Usd: z.number().int().nullish(),
    /** 25th-percentile annual revenue in USD. */
    p25Usd: z.number().int().nullish(),
    /** Median annual revenue in USD. */
    p50Usd: z.number().int().nullish(),
    /** 75th-percentile annual revenue in USD. */
    p75Usd: z.number().int().nullish(),
    /** 90th-percentile annual revenue in USD. */
    p90Usd: z.number().int().nullish(),
    /** Most likely annual revenue in USD. */
    pointEstimateUsd: z.number().int().nullish(),
    /** Whether the entity is judged to have no revenue yet. */
    preRevenue: z.boolean(),
    /** Probability from 0 to 1 that the entity has no revenue yet. */
    preRevenueProbability: z.number().min(0).max(1),
    /** Revenue model the estimate follows. */
    regime: RevenueEstimateRegimeSchema,
    /** Each signal family's combined weight in this estimate. */
    signalBreakdown: z.array(SignalFamilyScoreSchema),
});
/**
 * An entity's current annual revenue estimate: revenue model, pre-revenue probability, percentiles, drivers, and the evidence class, confidence, and per-family signals behind it.
 *
 * @openapiSchema EntityRevenueEstimate
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @contractShape entity.revenue-estimate
 * @contractRole canonical
 */
export const EntityRevenueEstimateSchema = EntityRevenueEstimateSchemaDefinition;
//# sourceMappingURL=revenue-estimate.js.map