// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Agent loop a harness run executes on: the Claude Agent SDK or the Pi agent SDK
 *
 * @openapiSchema HarnessChassis
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.chassis
 * @contractRole canonical
 */
export const HarnessChassisSchema = z.enum(["claude-agent-sdk", "pi-agent-sdk"]);
//# sourceMappingURL=chassis.js.map