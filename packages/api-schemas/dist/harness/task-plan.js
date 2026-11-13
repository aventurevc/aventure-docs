// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskNoWriteOutcomeSchema } from "./task-no-write-outcome.js";
import { HarnessTaskPlanStepSchema } from "./task-plan-step.js";
import { HarnessTaskSchema } from "./task.js";
/**
 * One catalog task's typed inputs and ordered steps with derived CLI commands and MCP tools, read from the stated catalog revision.
 *
 * @openapiSchema HarnessTaskPlan
 * @endpoint POST /v1/help
 * @usedBySchema HelpResolutionSchema
 * @contractShape harness.task-plan
 * @contractRole canonical
 */
export const HarnessTaskPlanSchema = z.object({
    /** Stored catalog revision this plan was read from. */
    catalogRevision: z.int().optional(),
    /** Ids of the completion checks this task must pass, as listed in the completion check catalog. A run's own plan lists only the checks its accepted target owes; a check that target's entity type or funding stage excludes is omitted. */
    gateId: z.array(z.string()).optional(),
    /** Typed task inputs; required inputs must be bound before it runs. */
    input: z.array(HarnessTaskSchema),
    /** Whether a run may complete with no committed required mutation when every gateId already passes on the target, because those gates measure the required write. False means this opt-in does not apply, not that a write is always required: a requester task that ends with accepted findings, a run whose required write a root run already satisfied, and a run reporting one of noWriteOutcome also complete without committing a write. */
    noWriteCompletion: z.boolean().optional(),
    /** Outcome classes a run may report to complete with no committed required mutation; the harness checks the reported class against the run's tool stream and records it on the mutation receipt. Empty means this task accepts no such outcome. */
    noWriteOutcome: z.array(HarnessTaskNoWriteOutcomeSchema).optional(),
    /** Steps in run order; an empty list means this catalog task is unplanned. */
    step: z.array(HarnessTaskPlanStepSchema),
    /** Agent-task catalog key. */
    taskKey: z.string().optional(),
});
//# sourceMappingURL=task-plan.js.map