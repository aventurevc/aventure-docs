// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsAnalysisSourceReferenceSchema } from "./analysis-source-reference.js";
const NewsAnalysisSectionSchemaDefinition = z.object({
    reference: z.array(NewsAnalysisSourceReferenceSchema),
    stepKey: z.string(),
    text: z.string(),
    /** Title of the accepted catalog step, set by the server at publication. */
    title: z.string(),
});
/**
 * One accepted analysis step and its cited interpretation.
 *
 * @openapiSchema NewsAnalysisSection
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsAnalysisSchema
 * @contractShape news.analysis-section
 * @contractRole canonical
 */
export const NewsAnalysisSectionSchema = NewsAnalysisSectionSchemaDefinition;
//# sourceMappingURL=analysis-section.js.map