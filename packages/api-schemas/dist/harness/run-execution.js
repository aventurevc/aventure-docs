// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunExecutionSchemaKnownMembers = z.enum(["ENGINE", "DIRECT"]);
/**
 * Executor of the accepted research work; independent of its requested scope
 *
 * @openapiSchema HarnessRunExecution
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-execution
 * @contractRole canonical
 */
export const HarnessRunExecutionSchema = Object.assign(z.union([HarnessRunExecutionSchemaKnownMembers, z.string()]), { enum: HarnessRunExecutionSchemaKnownMembers.enum });
//# sourceMappingURL=run-execution.js.map