// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchFindingSchema } from "../research/finding.js";
const EnrichmentPromptSchemaDefinition = z.object({
    /** Facts you already read verbatim on an external source page for an entity, each with statement, sourceUrl, and exact quote; omit taskPresetKey to default to apply-cited-findings */
    finding: z.array(ResearchFindingSchema).nullish(),
    /** Plain-language instruction for this run, such as an observed update and its source URL (newsUrlOriginal or web URL) or which facts to check first */
    userPrompt: z.string().max(2000).nullish(),
});
/**
 * Optional steering prompt or cited findings for one company, product, or service enrichment run
 *
 * @openapiSchema EnrichmentPrompt
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @contractShape enrichment.prompt
 * @contractRole canonical
 */
export const EnrichmentPromptSchema = EnrichmentPromptSchemaDefinition;
//# sourceMappingURL=prompt.js.map