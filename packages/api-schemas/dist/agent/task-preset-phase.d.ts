import { z } from "zod/v4";
/**
 * Run order when several presets are selected: PRIMARY presets run first; FINAL presets run after them, together, so they read the updated profile.
 *
 * @openapiSchema AgentTaskPresetPhase
 * @endpoint GET /v1/research/runs/presets
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