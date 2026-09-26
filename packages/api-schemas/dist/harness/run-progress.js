// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Current public progress of a harness run
 *
 * @openapiSchema HarnessRunProgress
 * @endpoint GET /v1/harness/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run-progress
 * @contractRole canonical
 */
export const HarnessRunProgressSchema = z.object({
    /** Whether the enrichment loop reports completion */
    complete: z.boolean(),
    /** Canonical entity slug currently reported by the loop */
    entitySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullable(),
    /** Concrete completion gates that remain unmet */
    gateRemaining: z.array(z.string()),
    /** Optional progress note from the loop */
    note: z.string().nullish(),
    /** Additional work the loop reports as remaining */
    whatElseRemaining: z.array(z.string()),
    /** Writes completed during the current loop iteration */
    writeThisIteration: z.array(z.string()),
});
//# sourceMappingURL=run-progress.js.map