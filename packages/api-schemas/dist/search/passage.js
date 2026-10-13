// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchEvidenceSourceSchema } from "./evidence-source.js";
const SearchPassageSchemaDefinition = z.object({
    /** Entity the passage is about. */
    entityId: z.uuid(),
    /** Snippet type key for research snippets, or the article title for news articles. */
    label: z.string(),
    /** Article publication time for news passages; null for snippets. */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Cosine similarity between the question and the passage; higher is closer. Compare scores only within one response. */
    score: z.number(),
    /** Record type that owns the passage text. */
    source: SearchEvidenceSourceSchema,
    /** Identifier of the owning snippet or news article. */
    sourceId: z.string(),
    /** Passage text: the snippet, or the article summary or excerpt. */
    text: z.string(),
    /** Original article URL for news passages; null for snippets. */
    url: z.string().nullish(),
});
/**
 * Text passage ranked by semantic closeness to a natural-language question, read from its owning record.
 *
 * @openapiSchema SearchPassage
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.passage
 * @contractRole canonical
 */
export const SearchPassageSchema = SearchPassageSchemaDefinition;
//# sourceMappingURL=passage.js.map