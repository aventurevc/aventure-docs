import { z } from "zod/v4";
/**
 * Queue lane for admission priority: interactive client work vs background backlog
 *
 * @openapiSchema HarnessRunLane
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-lane
 * @contractRole canonical
 */
export declare const HarnessRunLaneSchema: z.ZodEnum<{
    background: "background";
    interactive: "interactive";
}>;
export type HarnessRunLane = z.infer<typeof HarnessRunLaneSchema>;
//# sourceMappingURL=run-lane.d.ts.map