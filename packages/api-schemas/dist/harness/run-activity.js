// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunActivityTypeSchema } from "./run-activity-type.js";
const HarnessRunActivitySchemaDefinition = z.object({
    /** Time of the underlying event */
    createdAt: z.iso.datetime({ offset: true }),
    /** Activity category */
    kind: HarnessRunActivityTypeSchema,
    /** Reader-facing activity description */
    label: z.string(),
    /** Per-run event sequence */
    seq: z.int(),
});
/**
 * One ordered reader-facing run activity
 *
 * @openapiSchema HarnessRunActivity
 * @endpoint GET /v1/research/runs/{runId}/events
 * @contractShape harness.run-activity
 * @contractRole canonical
 */
export const HarnessRunActivitySchema = HarnessRunActivitySchemaDefinition;
//# sourceMappingURL=run-activity.js.map