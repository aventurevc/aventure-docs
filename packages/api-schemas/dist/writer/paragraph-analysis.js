// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Meta-analysis judgments assigned to one paragraph.
 *
 * @openapiSchema WriterParagraphAnalysis
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterParagraphSchema
 * @contractShape writer.paragraph-analysis
 * @contractRole canonical
 */
export const WriterParagraphAnalysisSchema = z.object({
    /** Whether this paragraph states the overall research answer; true on the first paragraph only. */
    answer: z.boolean(),
    /** Framework section labels this paragraph must state, in order. */
    section: z.array(z.string()),
});
//# sourceMappingURL=paragraph-analysis.js.map