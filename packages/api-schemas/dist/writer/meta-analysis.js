// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterAnalysisSectionSchema } from "./analysis-section.js";
import { WriterChangeSignalSchema } from "./change-signal.js";
import { WriterGapSchema } from "./gap.js";
import { WriterJudgmentSchema } from "./judgment.js";
import { WriterScopeSchema } from "./scope.js";
/**
 * Research judgment the writer must preserve.
 *
 * @openapiSchema WriterMetaAnalysis
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterBriefSchema
 * @contractShape writer.meta-analysis
 * @contractRole canonical
 */
export const WriterMetaAnalysisSchema = z.object({
    /** Overall answer to the research question. */
    answer: WriterJudgmentSchema,
    /** Date through which the judgment is current. */
    asOfDate: z.iso.date(),
    /** Evidence that would change the supplied view. */
    changeSignal: z.array(WriterChangeSignalSchema),
    /** Known gaps or conflicts that must not become invented facts. */
    gap: z.array(WriterGapSchema),
    /** Question the research answered. */
    question: z.string(),
    /** Boundary and period used by the research. */
    scope: WriterScopeSchema,
    /** Ordered framework judgments for a research snippet whose skill defines sections. */
    section: z.array(WriterAnalysisSectionSchema),
});
//# sourceMappingURL=meta-analysis.js.map