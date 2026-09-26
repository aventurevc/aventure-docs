// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "./mode.js";
const EnrichmentBatchSchemaDefinition = z.object({
    /** Canonical entity UUIDs to enrich, filed in order before any person */
    entityId: z.array(z.uuid()).optional(),
    /** COMPREHENSIVE (the default) researches each whole profile; INDIVIDUAL runs only the tasks named in taskPresetKey */
    mode: EnrichmentModeSchema.optional(),
    /** Model id for each run's lead agent; omit to use aVenture's default model */
    model: z.string().nullish(),
    /** Canonical person UUIDs to enrich, filed in order after every entity */
    personId: z.array(z.uuid()).optional(),
    /** Task preset keys that scope or emphasize every run; at least one is required when mode is INDIVIDUAL, and an unknown key is a 400 */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Plain-language instruction for every run, such as which facts or sources to check first */
    userPrompt: z.string().nullish(),
});
/**
 * Existing records to enrich in one call, with the run options every run shares
 *
 * @openapiSchema EnrichmentBatch
 * @endpoint POST /v1/enrichments
 * @contractShape enrichment.batch
 * @contractRole canonical
 */
export const EnrichmentBatchSchema = EnrichmentBatchSchemaDefinition;
//# sourceMappingURL=batch.js.map