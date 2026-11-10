import { z } from "zod/v4";
/**
 * Server admission for one terminal transition
 *
 * @openapiSchema HarnessRunTerminalDecision
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-terminal-decision
 * @contractRole canonical
 */
export declare const HarnessRunTerminalDecisionSchema: z.ZodObject<{
    engineId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    iteration: z.ZodInt;
    lockedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sequence: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    status: z.ZodEnum<{
        completed: "completed";
        failed: "failed";
        queued: "queued";
        running: "running";
        stopped: "stopped";
    }>;
    suppressionEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    suppressionProvenanceEventId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type HarnessRunTerminalDecision = z.infer<typeof HarnessRunTerminalDecisionSchema>;
//# sourceMappingURL=run-terminal-decision.d.ts.map