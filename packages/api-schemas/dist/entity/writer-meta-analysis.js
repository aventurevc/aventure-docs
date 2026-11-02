// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterChangeSignalSchema } from "../writer/change-signal.js";
import { WriterGapSchema } from "../writer/gap.js";
import { WriterJudgmentSchema } from "../writer/judgment.js";
import { WriterScopeSchema } from "../writer/scope.js";
const EntityWriterMetaAnalysisSchemaDefinition = z.object({
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
});
/**
 * Entity-text research judgment without framework sections.
 *
 * @openapiSchema EntityWriterMetaAnalysis
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterBriefSchema
 * @contractShape entity.writer-meta-analysis
 * @contractRole canonical
 */
export const EntityWriterMetaAnalysisSchema = EntityWriterMetaAnalysisSchemaDefinition;
//# sourceMappingURL=writer-meta-analysis.js.map