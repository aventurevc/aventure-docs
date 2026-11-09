// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunRequestOutcomeStatusSchemaKnownMembers = z.enum([
    "written",
    "alreadyPresent",
    "refuted",
    "removed",
    "notWritten",
]);
/**
 * written, alreadyPresent, refuted (a cited page contradicts it), removed (the run deleted its target record), or notWritten (fails the request gate)
 *
 * @openapiSchema HarnessRunRequestOutcomeStatus
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunRequestOutcomeSchema
 * @contractShape harness.run-request-outcome-status
 * @contractRole canonical
 */
export const HarnessRunRequestOutcomeStatusSchema = Object.assign(z.union([HarnessRunRequestOutcomeStatusSchemaKnownMembers, z.string()]), { enum: HarnessRunRequestOutcomeStatusSchemaKnownMembers.enum });
//# sourceMappingURL=run-request-outcome-status.js.map