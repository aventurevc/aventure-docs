// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsAnalysisSectionSchema } from "./analysis-section.js";
/**
 * The current shared, publicly readable article analysis.
 *
 * @openapiSchema NewsAnalysis
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsDetailSchema
 * @contractShape news.analysis
 * @contractRole canonical
 */
export const NewsAnalysisSchema = z.object({
    /** Type-safe identifier for news articles */
    newsId: z.int(),
    publishedAt: z.iso.datetime({ offset: true }),
    section: z.array(NewsAnalysisSectionSchema),
    version: z.int(),
});
//# sourceMappingURL=analysis.js.map