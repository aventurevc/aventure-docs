// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const AgentTaskPresetPhaseSchema = z.enum(["PRIMARY", "FINAL"]);
//# sourceMappingURL=task-preset-phase.js.map