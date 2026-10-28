// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskPresetSchema } from "./task-preset.js";
const AgentTaskPresetCatalogSchemaDefinition = z.object({
    /** Available task presets. Field name is singular by repository convention even though the value is a collection. */
    taskPreset: z.array(AgentTaskPresetSchema),
});
/**
 * Research presets available to the caller.
 *
 * @openapiSchema AgentTaskPresetCatalog
 * @endpoint GET /v1/research-runs/presets
 * @endpoint GET /v1/research/runs/presets
 * @contractShape agent.task-preset-catalog
 * @contractRole canonical
 */
export const AgentTaskPresetCatalogSchema = AgentTaskPresetCatalogSchemaDefinition;
//# sourceMappingURL=task-preset-catalog.js.map