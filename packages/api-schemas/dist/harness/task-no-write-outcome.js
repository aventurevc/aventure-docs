// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskNoWriteOutcomeSchemaKnownMembers = z.enum([
    "NO_LEADS",
    "ALREADY_PRESENT",
    "UNRESOLVED",
    "STILL_OPERATING",
]);
/**
 * NO_LEADS: the source held no accepted lead and the run attempted no write. ALREADY_PRESENT: each accepted lead is already present, proved by its owning read or a required create answering 409; the run committed no mutation. UNRESOLVED: a lead's identity stayed unresolved after a committed lookup read, with a stated reason. STILL_OPERATING: a source-backed investigation disproved suspected closure without committing research-data mutations.
 *
 * @openapiSchema HarnessTaskNoWriteOutcome
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/help
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunTerminalDecisionSchema
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task-no-write-outcome
 * @contractRole canonical
 */
export const HarnessTaskNoWriteOutcomeSchema = Object.assign(z.union([HarnessTaskNoWriteOutcomeSchemaKnownMembers, z.string()]), { enum: HarnessTaskNoWriteOutcomeSchemaKnownMembers.enum });
//# sourceMappingURL=task-no-write-outcome.js.map