// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SignalEvidenceClassSchema } from "./evidence-class.js";
const SignalFamilyScoreSchemaDefinition = z.object({
    /** Time-decayed family weight: each further snapshot adds half the previous share, capped at the evidence class's family ceiling. */
    decayedWeight: z.number(),
    /** Strongest evidence class among the family's observations. */
    evidenceClass: SignalEvidenceClassSchema,
    /** Observations combined into this family's weight. */
    observationCount: z.int(),
    /** Signal family, such as jobPosting or statutoryFiling. */
    signalFamily: z.string(),
});
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
export const SignalFamilyScoreSchema = SignalFamilyScoreSchemaDefinition;
//# sourceMappingURL=family-score.js.map