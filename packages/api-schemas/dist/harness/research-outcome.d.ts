import { z } from "zod/v4";
/**
 * Unsuccessful direct-session research disposition
 *
 * @openapiSchema HarnessResearchOutcome
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.research-outcome
 * @contractRole canonical
 */
export declare const HarnessResearchOutcomeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    BLOCKED: "BLOCKED";
    PARTIAL: "PARTIAL";
}>, z.ZodString]> & {
    enum: {
        BLOCKED: "BLOCKED";
        PARTIAL: "PARTIAL";
    };
};
export type HarnessResearchOutcome = z.infer<typeof HarnessResearchOutcomeSchema>;
//# sourceMappingURL=research-outcome.d.ts.map