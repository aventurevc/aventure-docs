import { z } from "zod/v4";
/**
 * Agent framework a research run executes on: the Claude Agent SDK, the Pi agent SDK, the Mistral Vibe app server (only for catalog models that list it), or additional harness chassis
 *
 * @openapiSchema HarnessChassis
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.chassis
 * @contractRole canonical
 */
export declare const HarnessChassisSchema: z.ZodUnion<readonly [z.ZodEnum<{
    "claude-agent-sdk": "claude-agent-sdk";
    "mistral-vibe": "mistral-vibe";
    "pi-agent-sdk": "pi-agent-sdk";
}>, z.ZodString]> & {
    enum: {
        "claude-agent-sdk": "claude-agent-sdk";
        "mistral-vibe": "mistral-vibe";
        "pi-agent-sdk": "pi-agent-sdk";
    };
};
export type HarnessChassis = z.infer<typeof HarnessChassisSchema>;
//# sourceMappingURL=chassis.d.ts.map