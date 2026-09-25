// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentComplianceSchema } from "../content/compliance.js";
/**
 * Persisted research snippet row for one entity.
 *
 * @openapiSchema EntityResearchSnippet
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/research-snippets/{snippetId}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @contractShape entity.research-snippet
 * @contractRole canonical
 */
export const EntityResearchSnippetSchema = z.object({
    /** Derived character/word counts and governed-contract compliance for this snippet row; null when not evaluated. */
    compliance: ContentComplianceSchema.nullish(),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    id: z.int(),
    text: z.string(),
    textType: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=research-snippet.js.map