// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
import { HarnessRunEnvironmentSchema } from "./run-environment.js";
import { HarnessRunStatusSchema } from "./run-status.js";
import { HarnessRunTypeSchema } from "./run-type.js";
const HarnessRunSchemaDefinition = z.object({
    /** Retry attempt counter */
    attempt: z.int(),
    /** Creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical slug of the entity the run produced */
    entitySlug: z.string().nullish(),
    /** API environment */
    environment: HarnessRunEnvironmentSchema,
    /** Terminal failure reason, when failed */
    error: z.string().nullish(),
    /** Typed terminal-failure class from the harness retry classifier (e.g. runtime_cap, escalated, provider_capacity, context_overflow); null unless failed */
    failureClass: z.string().nullish(),
    /** Run completion timestamp */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether this run consumes an immutable private source document */
    hasSourceDocument: z.boolean(),
    /** Run id */
    id: z.uuid(),
    /** Current loop iteration */
    iteration: z.int(),
    /** Latest enrich-loop status as an opaque JSON string */
    latestStatus: z.string().nullish(),
    /** Loop iteration cap */
    maxIteration: z.int(),
    /** Parallel read-only scout fan-out width N */
    maxScoutConcurrent: z.int(),
    /** Enrichment breadth selected for this run */
    mode: EnrichmentModeSchema,
    /** Orchestrator model id */
    model: z.string(),
    /** Earliest re-claim time when waiting on retry backoff */
    nextAttemptAt: z.iso.datetime({ offset: true }).nullish(),
    /** Instant past which a warm resume is no longer guaranteed; the harness writes it with session_resume from the model's cache window. Warm-resumable now iff failed/stopped and this is in the future. Null when there is no resume window. */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current lifecycle state */
    status: HarnessRunStatusSchema,
    /** Read-only research, cohort, and completion sub-agent model id */
    subagentModel: z.string(),
    /** Selected task preset keys filed with the run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Run kind derived from task-key presence: ENRICHMENT for a client-submitted comprehensive or preset-scoped run, TASK for a platform-scheduled micro-task execution */
    type: HarnessRunTypeSchema,
    /** Last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
    /** Company URL under enrichment */
    url: z.string(),
    /** Optional steering prompt filed with the run */
    userPrompt: z.string().nullish(),
});
/**
 * One harness enrichment run
 *
 * @openapiSchema HarnessRun
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape harness.run
 * @contractRole canonical
 */
export const HarnessRunSchema = HarnessRunSchemaDefinition;
//# sourceMappingURL=run.js.map