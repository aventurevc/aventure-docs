// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
import { HarnessRunFollowUpSchema } from "./run-follow-up.js";
import { HarnessRunProgressSchema } from "./run-progress.js";
import { HarnessRunSchema } from "./run.js";
const HarnessRunDetailSchemaDefinition = z.object({
    /** Current public profile the run resolved to */
    entity: EntitySchema.nullish(),
    /** Follow-up admission and direct child run ids for this terminal generation */
    followUp: HarnessRunFollowUpSchema.optional(),
    /** Time the run's newest stream event was recorded; null when the run has no events. A running run whose value stops advancing has stalled */
    lastEventAt: z.iso.datetime({ offset: true }).nullish(),
    /** Latest research progress; null when none is available */
    latestStatus: HarnessRunProgressSchema.nullish(),
    /** Parent organization's core record when the resolved entity is a Product/Service; null for every other entity type */
    provider: EntitySchema.nullish(),
    /** Exact renderable public profile URL for the resolved entity */
    publicUrl: z.string().nullish(),
    /** The research run */
    run: HarnessRunSchema,
});
/**
 * Research run with the profile it resolved to
 *
 * @openapiSchema HarnessRunDetail
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @contractShape harness.run-detail
 * @contractRole canonical
 */
export const HarnessRunDetailSchema = HarnessRunDetailSchemaDefinition;
//# sourceMappingURL=run-detail.js.map