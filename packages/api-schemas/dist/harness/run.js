// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
import { HarnessChassisSchema } from "./chassis.js";
import { HarnessLlmApiSchema } from "./llm-api.js";
import { HarnessResearchOutcomeSchema } from "./research-outcome.js";
import { HarnessRunEnvironmentSchema } from "./run-environment.js";
import { HarnessRunExecutionSchema } from "./run-execution.js";
import { HarnessRunFollowUpAdmissionSchema } from "./run-follow-up-admission.js";
import { HarnessRunLaneSchema } from "./run-lane.js";
import { HarnessRunStatusSchema } from "./run-status.js";
import { HarnessRunTypeSchema } from "./run-type.js";
import { ResearchAllowanceTypeSchema } from "../research/allowance-type.js";
/**
 * One research run on a company, Product, Service, or person
 *
 * @openapiSchema HarnessRun
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research/runs
 * @usedBySchema EnrichmentSchema
 * @usedBySchema HarnessRunDetailSchema
 * @usedBySchema PageHarnessRunSchema
 * @contractShape harness.run
 * @contractRole canonical
 */
export const HarnessRunSchema = z.object({
    /** Retry attempt counter */
    attempt: z.int(),
    /** Agent framework this run executes on */
    chassis: HarnessChassisSchema.nullish(),
    /** True when aVenture, not the caller, chose `chassis` */
    chassisRouted: z.boolean(),
    /** Creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Slug of the profile the run produced */
    entitySlug: z.string().nullish(),
    /** API environment */
    environment: HarnessRunEnvironmentSchema,
    /** Why the run failed; null unless failed */
    error: z.string().nullish(),
    /** Executor of this research attempt; absent on older APIs */
    execution: HarnessRunExecutionSchema.nullish(),
    /** Typed terminal-failure class from the harness retry classifier (e.g. runtime_cap, escalated, provider_capacity, context_overflow); null unless failed */
    failureClass: z.string().nullish(),
    /** Run completion timestamp */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Set only in the response that starts the run: true the first time it starts, false when a worker restarts it; null in every other response */
    firstStart: z.boolean().nullish(),
    /** Whether follow-up runs from this run's latest finish have all been filed; runs finished by older engine versions stay PENDING */
    followUpAdmission: HarnessRunFollowUpAdmissionSchema.optional(),
    /** Whether this run consumes an immutable private source document */
    hasSourceDocument: z.boolean(),
    /** Run id */
    id: z.uuid(),
    /** Current loop iteration */
    iteration: z.int(),
    /** Admission class (interactive or background) on client-facing responses; Prefer: run-lane-origin returns the actual queue lane. Engine lifecycle responses always return the actual lane. */
    lane: HarnessRunLaneSchema,
    /** Latest research-loop progress as a free-form JSON string */
    latestStatus: z.string().nullish(),
    /** Language-model API format this run's calls use */
    llmApi: HarnessLlmApiSchema.nullish(),
    /** Loop iteration cap */
    maxIteration: z.int(),
    /** How many read-only research helpers the run may use at once */
    maxScoutConcurrent: z.int(),
    /** Enrichment breadth selected for this run */
    mode: EnrichmentModeSchema,
    /** Engine model; absent for direct execution */
    model: z.string().nullish(),
    /** True when the requester left `model` to the auto router, which picks it again each time the run leaves the queue; null on engine lease responses */
    modelRouted: z.boolean().nullish(),
    /** Earliest re-claim time when waiting on retry backoff */
    nextAttemptAt: z.iso.datetime({ offset: true }).nullish(),
    /** Research allowance this run reserved when it was filed: COMPANY or PERSON; null for a run filed without one */
    researchAllowanceType: ResearchAllowanceTypeSchema.nullish(),
    /** How unsuccessful research ended: PARTIAL or BLOCKED, from its recorded failure class; null for other outcomes */
    researchOutcome: HarnessResearchOutcomeSchema.nullish(),
    /** Instant past which a warm resume is no longer guaranteed; the harness writes it with session_resume from the model's cache window. Warm-resumable now iff failed/stopped and this is in the future. Null when there is no resume window. */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current lifecycle state */
    status: HarnessRunStatusSchema,
    /** Model id of the run's read-only research and check helpers */
    subagentModel: z.string().nullish(),
    /** True when the requester left `subagentModel` to the auto router, which picks it again each time the run leaves the queue; null on engine lease responses */
    subagentModelRouted: z.boolean().nullish(),
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