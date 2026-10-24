import { z } from "zod/v4";
declare const AgentTaskPresetSchemaDefinition: z.ZodObject<{
    execution: z.ZodUnion<readonly [z.ZodEnum<{
        FULL: "FULL";
        MICRO: "MICRO";
    }>, z.ZodString]> & {
        enum: {
            FULL: "FULL";
            MICRO: "MICRO";
        };
    };
    key: z.ZodString;
    name: z.ZodString;
    phase: z.ZodEnum<{
        FINAL: "FINAL";
        PRIMARY: "PRIMARY";
    }>;
}, z.core.$strip>;
type AgentTaskPresetDefinition = z.infer<typeof AgentTaskPresetSchemaDefinition>;
export interface AgentTaskPresetSchemaInput extends z.input<typeof AgentTaskPresetSchemaDefinition> {
}
/**
 * A research preset: one named topic a research run can focus on.
 *
 * @openapiSchema AgentTaskPreset
 * @endpoint GET /v1/research-runs/presets
 * @usedBySchema AgentTaskPresetCatalogSchema
 * @contractShape agent.task-preset
 * @contractRole canonical
 */
export declare const AgentTaskPresetSchema: z.ZodType<AgentTaskPresetDefinition, AgentTaskPresetSchemaInput>;
export type AgentTaskPreset = z.infer<typeof AgentTaskPresetSchema>;
export {};
//# sourceMappingURL=task-preset.d.ts.map