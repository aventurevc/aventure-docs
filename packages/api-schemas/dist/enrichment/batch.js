// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "./mode.js";
const EnrichmentBatchSchemaDefinition = z.object({
    /** Canonical entity UUIDs to enrich, filed in order before any person */
    entityId: z.array(z.uuid()).optional(),
    /** Enrichment breadth; omitted requests the comprehensive default */
    mode: EnrichmentModeSchema.optional(),
    /** Orchestrator model override; omitted uses the configured role default */
    model: z.string().nullish(),
    /** Canonical person UUIDs to enrich, filed in order after every entity */
    personId: z.array(z.uuid()).optional(),
    /** Task preset keys that scope or emphasize every run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Optional steering prompt */
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