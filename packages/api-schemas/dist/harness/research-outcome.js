// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessResearchOutcomeSchemaKnownMembers = z.enum(["PARTIAL", "BLOCKED"]);
/**
 * Unsuccessful direct-session research disposition
 *
 * @openapiSchema HarnessResearchOutcome
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
 * @contractShape harness.research-outcome
 * @contractRole canonical
 */
export const HarnessResearchOutcomeSchema = Object.assign(z.union([HarnessResearchOutcomeSchemaKnownMembers, z.string()]), { enum: HarnessResearchOutcomeSchemaKnownMembers.enum });
//# sourceMappingURL=research-outcome.js.map