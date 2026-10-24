import { z } from "zod/v4";
/**
 * How a selected research preset runs.
 *
 * @openapiSchema AgentTaskPresetExecution
 * @endpoint GET /v1/research-runs/presets
 * @usedBySchema AgentTaskPresetSchema
 * @contractShape agent.task-preset-execution
 * @contractRole canonical
 */
export declare const AgentTaskPresetExecutionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    FULL: "FULL";
    MICRO: "MICRO";
}>, z.ZodString]> & {
    enum: {
        FULL: "FULL";
        MICRO: "MICRO";
    };
};
export type AgentTaskPresetExecution = z.infer<typeof AgentTaskPresetExecutionSchema>;
//# sourceMappingURL=task-preset-execution.d.ts.map