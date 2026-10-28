// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Research run kind: a caller-filed research request or a narrower scheduled run
 *
 * @openapiSchema HarnessRunType
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-type
 * @contractRole canonical
 */
export const HarnessRunTypeSchema = z.enum(["ENRICHMENT", "TASK"]);
//# sourceMappingURL=run-type.js.map