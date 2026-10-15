// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
import { ResearchFindingSchema } from "../research/finding.js";
const HarnessRunCreateSchemaDefinition = z.object({
    /** Facts you already read verbatim on an external source page for an entity, each citing the page and exact text that support it. Omit taskPresetKey to default to apply-cited-findings, or send a preset from GET /v1/research-runs/presets; the run checks each quote against its page and writes only the facts it confirms. When the detail comes from an indexed news article or a page not read verbatim, send userPrompt instead. */
    finding: z.array(ResearchFindingSchema).nullish(),
    /** How broadly the run researches the subject; omit it for COMPREHENSIVE */
    mode: EnrichmentModeSchema.optional(),
    /** Model id the run uses; omit it to use the default model */
    model: z.string().nullish(),
    /** Name of the subject at url, such as Clarity Health; the run verifies it and uses it to pick the right subject when the site names several */
    name: z.string().max(200).nullish(),
    /** Research presets that focus the run, listed by GET /v1/research-runs/presets; omit them for a full run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Official website or profile URL of the company, Product, Service, or person to research; a URL no current record owns researches a new one */
    url: z.string(),
    /** Optional steering prompt, such as an observed update and its source URL (newsUrlOriginal or web URL) or which facts to check first */
    userPrompt: z.string().nullish(),
});
/**
 * Request one research run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/research-runs
 * @contractShape harness.run-create
 * @contractRole canonical
 */
export const HarnessRunCreateSchema = HarnessRunCreateSchemaDefinition;
//# sourceMappingURL=run-create.js.map