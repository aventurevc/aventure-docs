// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Durable admission state for one terminal run generation's follow-up work
 *
 * @openapiSchema HarnessRunFollowUpAdmission
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema HarnessRunFollowUpSchema
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-follow-up-admission
 * @contractRole canonical
 */
export const HarnessRunFollowUpAdmissionSchema = z.enum([
    "UNTRACKED",
    "PENDING",
    "SETTLED",
    "REJECTED",
]);
//# sourceMappingURL=run-follow-up-admission.js.map