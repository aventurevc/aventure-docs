// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsAnalysisSourceReferenceSchemaDefinition = z.object({
    /** Verbatim excerpt from the cited source that supports the section. */
    quote: z.string().min(1).max(600),
    /** Stored source document holding the quote, when one was captured. */
    sourceDocumentId: z.uuid().nullish(),
    /** Absolute http or https URL of the cited source. */
    url: z.string(),
});
/**
 * A source supporting the analysis: its URL and a verbatim quote from it.
 *
 * @openapiSchema NewsAnalysisSourceReference
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsAnalysisSectionSchema
 * @contractShape news.analysis-source-reference
 * @contractRole canonical
 */
export const NewsAnalysisSourceReferenceSchema = NewsAnalysisSourceReferenceSchemaDefinition;
//# sourceMappingURL=analysis-source-reference.js.map