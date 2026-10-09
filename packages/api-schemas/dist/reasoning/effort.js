// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Reasoning effort level, lowest to highest: `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. A model receives the nearest level it supports.
 *
 * @openapiSchema ReasoningEffort
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedNaturalSearchSchema
 * @usedBySchema NaturalSearchSchema
 * @contractShape reasoning.effort
 * @contractRole canonical
 */
export const ReasoningEffortSchema = z.union([
    z.enum(["minimal", "low", "medium", "high", "xhigh", "max"]),
    z.string(),
]);
//# sourceMappingURL=effort.js.map