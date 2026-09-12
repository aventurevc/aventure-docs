// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentComplianceSchema } from "../content/compliance.js";
/**
 * Persisted research snippet row for one entity.
 *
 * @openapiSchema EntityResearchSnippet
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @contractShape entity.research-snippet
 * @contractRole canonical
 */
export const EntityResearchSnippetSchema = z.object({
    /** Derived character/word counts and governed-contract compliance for this snippet row; null when not evaluated. */
    compliance: ContentComplianceSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    id: z.int(),
    /** Current row. The live snippet for its type; demoted historical rows read only with includePrivate. */
    isCurrent: z.boolean(),
    /** Primary row among the current snippets of its type. */
    isPrimary: z.boolean(),
    text: z.string(),
    textType: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether the snippet appears in default reads. Admin/private reads (includePrivate) also return hidden rows. */
    visible: z.boolean(),
});
//# sourceMappingURL=research-snippet.js.map