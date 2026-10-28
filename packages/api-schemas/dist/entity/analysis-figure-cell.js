// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAnalysisFigureCellSchemaDefinition = z.object({
    /** Position of the cited quote in the section's citation list, from 1. */
    citation: z.int().min(1),
    /** Exact text copied from that quote; the figure displays it as is. */
    excerpt: z.string().min(1).max(200),
});
/**
 * A verbatim excerpt of one section citation's quote.
 *
 * @openapiSchema EntityAnalysisFigureCell
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisFigureEntrySchema
 * @contractShape entity.analysis-figure-cell
 * @contractRole canonical
 */
export const EntityAnalysisFigureCellSchema = EntityAnalysisFigureCellSchemaDefinition;
//# sourceMappingURL=analysis-figure-cell.js.map