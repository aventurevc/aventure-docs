import { z } from "zod/v4";
/**
 * Queue lane for admission priority: live (search and lookup) and interactive (one client run) take interactive admission; bulk (client batch) and background (system backlog) take background admission
 *
 * @openapiSchema HarnessRunLane
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EnrichmentBatchSchema
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-lane
 * @contractRole canonical
 */
export declare const HarnessRunLaneSchema: z.ZodUnion<readonly [z.ZodEnum<{
    background: "background";
    bulk: "bulk";
    interactive: "interactive";
    live: "live";
}>, z.ZodString]> & {
    enum: {
        background: "background";
        bulk: "bulk";
        interactive: "interactive";
        live: "live";
    };
};
export type HarnessRunLane = z.infer<typeof HarnessRunLaneSchema>;
//# sourceMappingURL=run-lane.d.ts.map