// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityWriterMetaAnalysisSchema } from "./writer-meta-analysis.js";
import { EntityWriterParagraphSchema } from "./writer-paragraph.js";
import { ResearchFindingSchema } from "../research/finding.js";
import { WriterPositioningSchema } from "../writer/positioning.js";
/**
 * Finished entity-text research analysis and section-free paragraph plan.
 *
 * @openapiSchema EntityWriterBrief
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessTaskInputBindingSchema
 * @contractShape entity.writer-brief
 * @contractRole canonical
 */
export const EntityWriterBriefSchema = z.object({
    /** Complete evidence ledger with source page and verbatim quote. */
    claim: z.array(ResearchFindingSchema),
    /** Finished research question, answer, gaps, and change signals. */
    metaAnalysis: EntityWriterMetaAnalysisSchema,
    /** Evidence claims this output states: paragraph.claim in paragraph order. Derived by the server; a sent value is ignored. */
    outputClaim: z.array(z.int()).optional(),
    /** Paragraph plan; each paragraph states the listed claims and judgments, and paragraph order is the output order; only the first paragraph consumes the answer. */
    paragraph: z.array(EntityWriterParagraphSchema),
    /** Positioning decisions selected by research. Put each decision and all its cited claims in one paragraph. A listed decision stays in that paragraph; an unlisted decision goes to the paragraph of its first cited claim. */
    positioning: z.array(WriterPositioningSchema),
});
//# sourceMappingURL=writer-brief.js.map