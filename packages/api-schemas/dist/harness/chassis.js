// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessChassisSchemaKnownMembers = z.enum([
    "claude-agent-sdk",
    "pi-agent-sdk",
    "mistral-vibe",
]);
/**
 * Agent framework a research run executes on: the Claude Agent SDK, the Pi agent SDK, the Mistral Vibe app server (only for catalog models that list it), or additional harness chassis
 *
 * @openapiSchema HarnessChassis
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.chassis
 * @contractRole canonical
 */
export const HarnessChassisSchema = Object.assign(z.union([HarnessChassisSchemaKnownMembers, z.string()]), { enum: HarnessChassisSchemaKnownMembers.enum });
//# sourceMappingURL=chassis.js.map