// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Harness run lifecycle state
 *
 * @openapiSchema HarnessRunStatus
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-status
 * @contractRole canonical
 */
export const HarnessRunStatusSchema = z.enum([
    "queued",
    "running",
    "completed",
    "failed",
    "stopped",
]);
//# sourceMappingURL=run-status.js.map