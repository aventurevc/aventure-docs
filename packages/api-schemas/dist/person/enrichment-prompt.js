// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonEnrichmentPromptSchemaDefinition = z.object({
    /** Plain-language instruction for this run, such as an observed update and its source URL (newsUrlOriginal or web URL) or which facts to check first */
    userPrompt: z.string().max(2000).nullish(),
});
/**
 * Optional steering prompt for one person enrichment run
 *
 * @openapiSchema PersonEnrichmentPrompt
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape person.enrichment-prompt
 * @contractRole canonical
 */
export const PersonEnrichmentPromptSchema = PersonEnrichmentPromptSchemaDefinition;
//# sourceMappingURL=enrichment-prompt.js.map