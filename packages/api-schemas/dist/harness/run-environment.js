// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Owning API environment
 *
 * @openapiSchema HarnessRunEnvironment
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-environment
 * @contractRole canonical
 */
export const HarnessRunEnvironmentSchema = z.enum([
    "unassigned",
    "development",
    "staging",
    "production",
]);
//# sourceMappingURL=run-environment.js.map