// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterJudgmentSchemaDefinition = z.object({
    /** Evidence claim numbers supporting the judgment. */
    claim: z.array(z.int()),
    /** The judgment in plain words. */
    statement: z.string(),
});
/**
 * One sourced research judgment.
 *
 * @openapiSchema WriterJudgment
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterAnalysisSectionSchema
 * @usedBySchema WriterMetaAnalysisSchema
 * @contractShape writer.judgment
 * @contractRole canonical
 */
export const WriterJudgmentSchema = WriterJudgmentSchemaDefinition;
//# sourceMappingURL=judgment.js.map