// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
import { SignalEvidenceClassSchema } from "../signal/evidence-class.js";
import { SignalFamilyScoreSchema } from "../signal/family-score.js";
const EntityHeadcountEstimateSchemaDefinition = z.object({
    /** Agreement of the families' point estimates from 0 to 1; 1 is full agreement. */
    concordanceScore: z.number().min(0).max(1).nullish(),
    /** 1 when a direct or indirect signal is active, 2 when only statistical priors are, 0 when no signal is. */
    coverageTier: z.int(),
    /** Confidence tier the evidence supports. */
    dataConfidence: EntityValuationDataConfidenceSchema,
    /** Signal families whose strongest active evidence is direct. */
    directSignalCount: z.int(),
    /** Sum over signal families of ln(1 + family weight); independent families add, redundant snapshots saturate. */
    effectiveSignalMass: z.number(),
    /** Entity id (UUID). */
    entityId: z.uuid(),
    /** When this estimate was computed. */
    estimatedAt: z.iso.datetime({ offset: true }),
    /** Strongest evidence class among the active signal families. */
    evidenceClass: SignalEvidenceClassSchema,
    /** Headcount change over the last 12 months, in percent. */
    growth12mPct: z.number().nullish(),
    /** Headcount change over the last 6 months, in percent. */
    growth6mPct: z.number().nullish(),
    /** Signal families whose strongest active evidence is indirect. */
    indirectSignalCount: z.int(),
    /** Signal families whose strongest active evidence is inferred. */
    inferredSignalCount: z.int(),
    /** Estimation model version that produced this estimate. */
    modelVersion: z.string(),
    /** 10th-percentile headcount. */
    p10: z.int().min(0),
    /** 25th-percentile headcount. */
    p25: z.int().min(0),
    /** Median headcount. */
    p50: z.int().min(0),
    /** 75th-percentile headcount. */
    p75: z.int().min(0),
    /** 90th-percentile headcount. */
    p90: z.int().min(0),
    /** Most likely current headcount. */
    pointEstimate: z.int().min(0),
    /** Each signal family's combined weight in this estimate. */
    signalBreakdown: z.array(SignalFamilyScoreSchema),
});
/**
 * An entity's current headcount estimate: point estimate and percentiles, growth, and the evidence class, confidence, and per-family signals behind it.
 *
 * @openapiSchema EntityHeadcountEstimate
 * @endpoint GET /v1/entities/{entityId}/headcount-estimate
 * @contractShape entity.headcount-estimate
 * @contractRole canonical
 */
export const EntityHeadcountEstimateSchema = EntityHeadcountEstimateSchemaDefinition;
//# sourceMappingURL=headcount-estimate.js.map