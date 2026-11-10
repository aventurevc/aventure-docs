// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunStatusSchema } from "./run-status.js";
/**
 * Server admission for one terminal transition
 *
 * @openapiSchema HarnessRunTerminalDecision
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-terminal-decision
 * @contractRole canonical
 */
export const HarnessRunTerminalDecisionSchema = z.object({
    /** Lease owner at the terminal transition */
    engineId: z.string().nullish(),
    /** Finish time accepted by the terminal transition */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Iteration accepted by the terminal transition */
    iteration: z.int(),
    /** Lease generation at the terminal transition */
    lockedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Requester deletion verified for this terminal completion */
    requesterRemoved: z.boolean().nullish(),
    /** Server event sequence on run reads; the event stream supplies it separately */
    sequence: z.int().nullish(),
    /** Admitted terminal status */
    status: HarnessRunStatusSchema,
    /** Accepted entity whose suppression admitted this finish */
    suppressionEntityId: z.uuid().nullish(),
    /** Canonical provenance event that admitted suppression */
    suppressionProvenanceEventId: z.number().int().nullish(),
});
//# sourceMappingURL=run-terminal-decision.js.map