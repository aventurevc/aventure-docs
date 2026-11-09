// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunRequestOutcomeStatusSchema } from "./run-request-outcome-status.js";
const HarnessRunRequestOutcomeSchemaDefinition = z.object({
    /** Why the change was not written; a refuted entry names the URL of the page that contradicts the request */
    reason: z.string().nullish(),
    /** The change the request asks for, in the requester's terms */
    request: z.string(),
    /** What the run did about the change */
    status: HarnessRunRequestOutcomeStatusSchema,
});
/**
 * One distinct change the requester asked for and what the run did about it
 *
 * @openapiSchema HarnessRunRequestOutcome
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunProgressSchema
 * @contractShape harness.run-request-outcome
 * @contractRole canonical
 */
export const HarnessRunRequestOutcomeSchema = HarnessRunRequestOutcomeSchemaDefinition;
//# sourceMappingURL=run-request-outcome.js.map