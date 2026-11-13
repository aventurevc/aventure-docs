// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskNoWriteOutcomeSchemaKnownMembers = z.enum([
    "NO_LEADS",
    "ALREADY_PRESENT",
    "UNRESOLVED",
]);
/**
 * NO_LEADS: the source held no accepted lead and the run attempted no write. ALREADY_PRESENT: each accepted lead is already present, proved by its owning read or a required create answering 409; the run committed no mutation. UNRESOLVED: a lead's identity stayed unresolved after a committed lookup read, with a stated reason.
 *
 * @openapiSchema HarnessTaskNoWriteOutcome
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskPlanSchema
 * @contractShape harness.task-no-write-outcome
 * @contractRole canonical
 */
export const HarnessTaskNoWriteOutcomeSchema = Object.assign(z.union([HarnessTaskNoWriteOutcomeSchemaKnownMembers, z.string()]), { enum: HarnessTaskNoWriteOutcomeSchemaKnownMembers.enum });
//# sourceMappingURL=task-no-write-outcome.js.map