// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LetterCountsSchemaDefinition = z.object({
    /** Letter → count map. Keys are single uppercase A–Z characters; missing keys mean zero rows. */
    counts: z.record(z.string(), z.number().int()),
});
/**
 * Per-initial visible-row counts for sitemap directory navigation. Keys are uppercase A–Z initials; values are the visible total for that initial.
 *
 * @openapiSchema LetterCounts
 * @endpoint GET /v1/sitemap/entities/letter-counts
 * @endpoint GET /v1/sitemap/news/letter-counts
 * @endpoint GET /v1/sitemap/people/letter-counts
 * @contractShape letter.counts
 * @contractRole canonical
 */
export const LetterCountsSchema = LetterCountsSchemaDefinition;
//# sourceMappingURL=counts.js.map