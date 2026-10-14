import { z } from "zod/v4";
/**
 * Dispatch phase governing intra-job ordering when presets are multi-selected.
 *
 * @openapiSchema AgentTaskPresetPhase
 * @endpoint GET /v1/research-runs/presets
 * @usedBySchema AgentTaskPresetSchema
 * @contractShape agent.task-preset-phase
 * @contractRole canonical
 */
export declare const AgentTaskPresetPhaseSchema: z.ZodEnum<{
    FINAL: "FINAL";
    PRIMARY: "PRIMARY";
}>;
export type AgentTaskPresetPhase = z.infer<typeof AgentTaskPresetPhaseSchema>;
//# sourceMappingURL=task-preset-phase.d.ts.map