// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentInstructionSchema } from "./instruction.js";
import { EnrichmentModeSchema } from "./mode.js";
const EnrichmentBatchSchemaDefinition = z.object({
    /** Canonical entity UUIDs to enrich, filed in order before any person */
    entityId: z.array(z.uuid()).optional(),
    /** Additional instructions for selected records, one entry per owner. Each entry appends to the shared userPrompt for that owner only. Duplicate or unselected owners and combined prompts longer than the run limit are rejected before any run is filed. Omit for identical instructions on every run. */
    instruction: z.array(EnrichmentInstructionSchema).optional(),
    /** COMPREHENSIVE (the default) researches each whole profile; INDIVIDUAL runs only the tasks named in taskPresetKey */
    mode: EnrichmentModeSchema.optional(),
    /** Model id for each run's lead agent; omit to use aVenture's default model */
    model: z.string().nullish(),
    /** News article ids. The server identifies every company and person each article names, as POST /v1/lookup/mentions does with sourceNewsId, adds the article's linked companies and people, and files one enrichment per distinct record. */
    newsId: z.array(z.int()).optional(),
    /** Canonical person UUIDs to enrich, filed in order after every entity */
    personId: z.array(z.uuid()).optional(),
    /** Task preset keys that scope or emphasize every run; at least one is required when mode is INDIVIDUAL, and an unknown key is a 400 */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Plain-language instruction for every run, such as which facts or sources to check first */
    userPrompt: z.string().max(2000).nullish(),
});
/**
 * Existing records to enrich in one call, with shared run options and optional additional instructions for individual selected records
 *
 * @openapiSchema EnrichmentBatch
 * @endpoint POST /v1/enrichments
 * @contractShape enrichment.batch
 * @contractRole canonical
 */
export const EnrichmentBatchSchema = EnrichmentBatchSchemaDefinition;
//# sourceMappingURL=batch.js.map