// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
import { HarnessChassisSchema } from "./chassis.js";
import { HarnessLlmApiSchema } from "./llm-api.js";
import { HarnessRunEnvironmentSchema } from "./run-environment.js";
import { HarnessRunFollowUpAdmissionSchema } from "./run-follow-up-admission.js";
import { HarnessRunLaneSchema } from "./run-lane.js";
import { HarnessRunStatusSchema } from "./run-status.js";
import { HarnessRunTypeSchema } from "./run-type.js";
import { ResearchAllowanceTypeSchema } from "../research/allowance-type.js";
/**
 * One research run on a company, Product, Service, or person
 *
 * @openapiSchema HarnessRun
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema EnrichmentSchema
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run
 * @contractRole canonical
 */
export const HarnessRunSchema = z.object({
    /** Retry attempt counter */
    attempt: z.int(),
    /** Agent loop this run executes on */
    chassis: HarnessChassisSchema,
    /** True when the chassis router, not a caller, picked `chassis` */
    chassisRouted: z.boolean(),
    /** Creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Slug of the profile the run produced */
    entitySlug: z.string().nullish(),
    /** API environment */
    environment: HarnessRunEnvironmentSchema,
    /** Why the run failed; null unless failed */
    error: z.string().nullish(),
    /** Typed terminal-failure class from the harness retry classifier (e.g. runtime_cap, escalated, provider_capacity, context_overflow); null unless failed */
    failureClass: z.string().nullish(),
    /** Run completion timestamp */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Follow-up admission for the exact current terminal generation; old engine terminals remain PENDING */
    followUpAdmission: HarnessRunFollowUpAdmissionSchema.optional(),
    /** Whether this run consumes an immutable private source document */
    hasSourceDocument: z.boolean(),
    /** Run id */
    id: z.uuid(),
    /** Current loop iteration */
    iteration: z.int(),
    /** Queue lane for admission priority */
    lane: HarnessRunLaneSchema,
    /** Latest enrich-loop status as an opaque JSON string */
    latestStatus: z.string().nullish(),
    /** Gateway wire API every LLM call of this run uses */
    llmApi: HarnessLlmApiSchema,
    /** Loop iteration cap */
    maxIteration: z.int(),
    /** Parallel read-only scout fan-out width N */
    maxScoutConcurrent: z.int(),
    /** Enrichment breadth selected for this run */
    mode: EnrichmentModeSchema,
    /** Model the run uses */
    model: z.string(),
    /** Earliest re-claim time when waiting on retry backoff */
    nextAttemptAt: z.iso.datetime({ offset: true }).nullish(),
    /** Research allowance this run reserved when it was filed: COMPANY or PERSON; null for a run filed without one */
    researchAllowanceType: ResearchAllowanceTypeSchema.nullish(),
    /** Instant past which a warm resume is no longer guaranteed; the harness writes it with session_resume from the model's cache window. Warm-resumable now iff failed/stopped and this is in the future. Null when there is no resume window. */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current lifecycle state */
    status: HarnessRunStatusSchema,
    /** Read-only research, cohort, and completion sub-agent model id */
    subagentModel: z.string(),
    /** Research presets filed with the run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Run kind: ENRICHMENT for a research request a caller filed, TASK for a narrower run aVenture scheduled */
    type: HarnessRunTypeSchema,
    /** Last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
    /** URL of the company, Product, Service, or person under research */
    url: z.string(),
    /** Optional instructions filed with the run */
    userPrompt: z.string().nullish(),
});
//# sourceMappingURL=run.js.map