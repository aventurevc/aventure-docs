// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
const HarnessRunCreateSchemaDefinition = z.object({
    /** Enrichment breadth. Omitted by older clients to request the comprehensive default. */
    mode: EnrichmentModeSchema.optional(),
    /** Optional orchestrator model override; omitted uses the configured role default */
    model: z.string().nullish(),
    /** Name of the subject at url, such as Clarity Health; the run verifies it and uses it to pick the right subject when the site names several */
    name: z.string().max(200).nullish(),
    /** Selected task preset keys that scoped or emphasized this run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Official website or profile URL of the company, Product, Service, or person to research; a URL no current record owns researches a new one */
    url: z.string(),
    /** Optional steering prompt */
    userPrompt: z.string().nullish(),
});
/**
 * Create one harness enrichment run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/harness/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 */
export const HarnessRunCreateSchema = HarnessRunCreateSchemaDefinition;
//# sourceMappingURL=run-create.js.map