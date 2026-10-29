// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchFindingSchema } from "../research/finding.js";
import { WriterMetaAnalysisSchema } from "./meta-analysis.js";
import { WriterParagraphSchema } from "./paragraph.js";
import { WriterPositioningSchema } from "./positioning.js";
/**
 * Finished research analysis for a governed prose write. The writer may phrase only the selected output claims and supplied judgments.
 *
 * @openapiSchema WriterBrief
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionMutationSchema
 * @contractShape writer.brief
 * @contractRole canonical
 */
export const WriterBriefSchema = z.object({
    /** Complete evidence ledger with source page and verbatim quote. */
    claim: z.array(ResearchFindingSchema),
    /** Finished research question, answer, framework judgments, gaps, and change signals. */
    metaAnalysis: WriterMetaAnalysisSchema.optional(),
    /** Evidence claims this output states: paragraph.claim in paragraph order. Derived by the server; a sent value is ignored. */
    outputClaim: z.array(z.int()).optional(),
    /** Paragraph plan; each paragraph states the listed claims and judgments, and paragraph order is the output order; only the first paragraph consumes the answer. */
    paragraph: z.array(WriterParagraphSchema),
    /** Positioning decisions selected by research. Put each decision and all its cited claims in one paragraph. A listed decision stays in that paragraph; an unlisted decision goes to the paragraph of its first cited claim. */
    positioning: z.array(WriterPositioningSchema),
});
//# sourceMappingURL=brief.js.map