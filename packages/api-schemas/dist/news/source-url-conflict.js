// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsSourceUrlConflictSchemaDefinition = z.object({
    /** Existing article id (NewsId.value) that already owns this publication + URL pair. */
    conflictingArticleId: z.int(),
    /** Existing article slug, or empty string when the existing article has no slug. Use with GET /v1/news/detail?slug= to fetch the conflicting article. */
    conflictingArticleSlug: z.string(),
    /** Existing article title for human-readable diagnostics. */
    conflictingArticleTitle: z.string(),
});
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a news mutation's publication + newsUrlOriginal pair already belongs to another article. The returned fields identify the existing article so the caller can read/update it instead of creating a duplicate.
 *
 * @openapiSchema NewsSourceUrlConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape news.source-url-conflict
 * @contractRole canonical
 */
export const NewsSourceUrlConflictSchema = NewsSourceUrlConflictSchemaDefinition;
//# sourceMappingURL=source-url-conflict.js.map