import { z } from "zod/v4";
declare const AgentTaskPresetCatalogSchemaDefinition: z.ZodObject<{
    taskPreset: z.ZodArray<z.ZodType<{
        execution: string;
        key: string;
        name: string;
        phase: "FINAL" | "PRIMARY";
    }, import("./task-preset.ts").AgentTaskPresetSchemaInput, z.core.$ZodTypeInternals<{
        execution: string;
        key: string;
        name: string;
        phase: "FINAL" | "PRIMARY";
    }, import("./task-preset.ts").AgentTaskPresetSchemaInput>>>;
}, z.core.$strip>;
type AgentTaskPresetCatalogDefinition = z.infer<typeof AgentTaskPresetCatalogSchemaDefinition>;
export interface AgentTaskPresetCatalogSchemaInput extends z.input<typeof AgentTaskPresetCatalogSchemaDefinition> {
}
/**
 * Research presets available to the caller.
 *
 * @openapiSchema AgentTaskPresetCatalog
 * @endpoint GET /v1/research-runs/presets
 * @endpoint GET /v1/research/runs/presets
 * @contractShape agent.task-preset-catalog
 * @contractRole canonical
 */
export declare const AgentTaskPresetCatalogSchema: z.ZodType<AgentTaskPresetCatalogDefinition, AgentTaskPresetCatalogSchemaInput>;
export type AgentTaskPresetCatalog = z.infer<typeof AgentTaskPresetCatalogSchema>;
export {};
//# sourceMappingURL=task-preset-catalog.d.ts.map