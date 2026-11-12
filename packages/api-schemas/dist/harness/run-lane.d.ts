import { z } from "zod/v4";
/**
 * Queue priority of a run: live (search and lookup) and interactive (one client run) share the interactive queue; bulk (client batch) and background (scheduled work) share the background queue
 *
 * @openapiSchema HarnessRunLane
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
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