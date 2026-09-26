import { z } from "zod/v4";
/**
 * Agent loop a harness run executes on: the Claude Agent SDK or the Pi agent SDK
 *
 * @openapiSchema HarnessChassis
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.chassis
 * @contractRole canonical
 */
export declare const HarnessChassisSchema: z.ZodEnum<{
    "claude-agent-sdk": "claude-agent-sdk";
    "pi-agent-sdk": "pi-agent-sdk";
}>;
export type HarnessChassis = z.infer<typeof HarnessChassisSchema>;
//# sourceMappingURL=chassis.d.ts.map