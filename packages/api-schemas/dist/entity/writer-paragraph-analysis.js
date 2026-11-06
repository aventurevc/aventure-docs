// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityWriterParagraphAnalysisSchemaDefinition = z.object({
    /** Whether this paragraph states the overall research answer; true on the first paragraph only. */
    answer: z.boolean(),
});
/**
 * Overall research answer assignment for entity text.
 *
 * @openapiSchema EntityWriterParagraphAnalysis
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterParagraphSchema
 * @contractShape entity.writer-paragraph-analysis
 * @contractRole canonical
 */
export const EntityWriterParagraphAnalysisSchema = EntityWriterParagraphAnalysisSchemaDefinition;
//# sourceMappingURL=writer-paragraph-analysis.js.map