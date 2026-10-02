// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EnrichmentPromptSchemaDefinition = z.object({
    /** Plain-language instruction for this run, such as which facts or sources to check first */
    userPrompt: z.string().max(2000).nullish(),
});
/**
 * Optional steering for one company or person enrichment run
 *
 * @openapiSchema EnrichmentPrompt
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape enrichment.prompt
 * @contractRole canonical
 */
export const EnrichmentPromptSchema = EnrichmentPromptSchemaDefinition;
//# sourceMappingURL=prompt.js.map