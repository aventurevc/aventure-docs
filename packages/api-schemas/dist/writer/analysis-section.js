// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterJudgmentSchema } from "./judgment.js";
const WriterAnalysisSectionSchemaDefinition = z.object({
    /** Judgment for this section. */
    judgment: WriterJudgmentSchema,
    /** Skill-owned section label. */
    label: z.string(),
});
/**
 * One ordered framework judgment.
 *
 * @openapiSchema WriterAnalysisSection
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.analysis-section
 * @contractRole canonical
 */
export const WriterAnalysisSectionSchema = WriterAnalysisSectionSchemaDefinition;
//# sourceMappingURL=analysis-section.js.map