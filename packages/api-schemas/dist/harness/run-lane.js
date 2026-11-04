// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunLaneSchemaKnownMembers = z.enum(["live", "interactive", "bulk", "background"]);
/**
 * Queue lane for admission priority: live (search and lookup) and interactive (one client run) take interactive admission; bulk (client batch) and background (system backlog) take background admission
 *
 * @openapiSchema HarnessRunLane
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EnrichmentBatchSchema
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-lane
 * @contractRole canonical
 */
export const HarnessRunLaneSchema = Object.assign(z.union([HarnessRunLaneSchemaKnownMembers, z.string()]), { enum: HarnessRunLaneSchemaKnownMembers.enum });
//# sourceMappingURL=run-lane.js.map