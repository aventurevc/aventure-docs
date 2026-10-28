// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentTaskPresetExecutionSchemaKnownMembers = z.enum(["FULL", "MICRO", "INTERACTIVE"]);
/**
 * How a selected research preset runs: FULL runs the full enrichment loop; MICRO runs one bounded agent task; INTERACTIVE is a subscriber-selectable session preset whose run accepts no findings and stays open for user turns.
 *
 * @openapiSchema AgentTaskPresetExecution
 * @endpoint GET /v1/research-runs/presets
 * @endpoint GET /v1/research/runs/presets
 * @usedBySchema AgentTaskPresetSchema
 * @contractShape agent.task-preset-execution
 * @contractRole canonical
 */
export const AgentTaskPresetExecutionSchema = Object.assign(z.union([AgentTaskPresetExecutionSchemaKnownMembers, z.string()]), { enum: AgentTaskPresetExecutionSchemaKnownMembers.enum });
//# sourceMappingURL=task-preset-execution.js.map