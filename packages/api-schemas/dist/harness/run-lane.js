// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Queue lane for admission priority: interactive client work vs background backlog
 *
 * @openapiSchema HarnessRunLane
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-lane
 * @contractRole canonical
 */
export const HarnessRunLaneSchema = z.enum(["interactive", "background"]);
//# sourceMappingURL=run-lane.js.map