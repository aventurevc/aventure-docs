// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Character and word counts for the text, and whether it meets its text type's rules (word and character limits and paragraph shape). violation lists each unmet rule and is empty when the text meets them all.
 *
 * @openapiSchema ContentCompliance
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/analysis-replay
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/research-snippets/{snippetId}
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/texts/{textId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityResearchSnippetSchema
 * @usedBySchema EntityTextSchema
 * @contractShape content.compliance
 * @contractRole canonical
 */
export const ContentComplianceSchema = z.object({
    /** Character count of the row text (UTF-16 units). */
    characterCount: z.int(),
    /** Whether the text meets every length and paragraph rule for its type. */
    meetsRequirements: z.boolean(),
    /** One human-readable reason per unmet rule; empty when compliant. */
    violation: z.array(z.string()),
    /** Word count of the row text (whitespace-separated tokens). */
    wordCount: z.int(),
});
//# sourceMappingURL=compliance.js.map