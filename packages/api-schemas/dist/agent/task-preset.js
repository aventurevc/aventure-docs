// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskPresetExecutionSchema } from "./task-preset-execution.js";
import { AgentTaskPresetPhaseSchema } from "./task-preset-phase.js";
const AgentTaskPresetSchemaDefinition = z.object({
    /** How the preset runs: FULL focuses a full research run on its topic; MICRO runs it as one bounded research task; INTERACTIVE runs a subscriber-selectable session that accepts no findings and stays open for user turns. */
    execution: AgentTaskPresetExecutionSchema,
    /** Stable key to send in taskPresetKey. */
    key: z.string(),
    /** Display name of the topic the preset researches. */
    name: z.string(),
    /** Dispatch phase for intra-job ordering: PRIMARY presets run first; FINAL presets defer until the primary wave completes so they read the freshly-updated entity dossier. */
    phase: AgentTaskPresetPhaseSchema,
});
/**
 * A research preset: one named topic a research run can focus on.
 *
 * @openapiSchema AgentTaskPreset
 * @endpoint GET /v1/research-runs/presets
 * @endpoint GET /v1/research/runs/presets
 * @usedBySchema AgentTaskPresetCatalogSchema
 * @contractShape agent.task-preset
 * @contractRole canonical
 */
export const AgentTaskPresetSchema = AgentTaskPresetSchemaDefinition;
//# sourceMappingURL=task-preset.js.map