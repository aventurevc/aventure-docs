// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
import { HarnessRunProgressSchema } from "./run-progress.js";
import { HarnessRunSchema } from "./run.js";
const HarnessRunDetailSchemaDefinition = z.object({
    /** Current public entity resolved from the run slug */
    entity: EntitySchema.nullish(),
    /** Parsed principal-facing loop progress; null when the raw run status is absent or invalid */
    latestStatus: HarnessRunProgressSchema.nullish(),
    /** Parent organization's core record when the resolved entity is a Product/Service; null for every other entity type */
    provider: EntitySchema.nullish(),
    /** Exact renderable public profile URL for the resolved entity */
    publicUrl: z.string().nullish(),
    /** Canonical harness run */
    run: HarnessRunSchema,
});
/**
 * Harness run with its resolved public entity
 *
 * @openapiSchema HarnessRunDetail
 * @endpoint GET /v1/harness/runs/{runId}
 * @contractShape harness.run-detail
 * @contractRole canonical
 */
export const HarnessRunDetailSchema = HarnessRunDetailSchemaDefinition;
//# sourceMappingURL=run-detail.js.map