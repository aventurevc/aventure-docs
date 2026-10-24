import { z } from "zod/v4";
/**
 * How a selected research preset runs: FULL runs the full enrichment loop; MICRO runs one bounded agent task; INTERACTIVE is a subscriber-selectable session preset whose run accepts no findings and stays open for user turns.
 *
 * @openapiSchema AgentTaskPresetExecution
 * @endpoint GET /v1/research-runs/presets
 * @usedBySchema AgentTaskPresetSchema
 * @contractShape agent.task-preset-execution
 * @contractRole canonical
 */
export declare const AgentTaskPresetExecutionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    FULL: "FULL";
    INTERACTIVE: "INTERACTIVE";
    MICRO: "MICRO";
}>, z.ZodString]> & {
    enum: {
        FULL: "FULL";
        INTERACTIVE: "INTERACTIVE";
        MICRO: "MICRO";
    };
};
export type AgentTaskPresetExecution = z.infer<typeof AgentTaskPresetExecutionSchema>;
//# sourceMappingURL=task-preset-execution.d.ts.map