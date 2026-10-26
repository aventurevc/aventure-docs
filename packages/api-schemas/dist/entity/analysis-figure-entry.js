// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisFigureCellSchema } from "./analysis-figure-cell.js";
const EntityAnalysisFigureEntrySchemaDefinition = z.object({
    /** One cell per COMPARISON column; exactly one cell for every other type. */
    cell: z.array(EntityAnalysisFigureCellSchema),
    /** Entry heading: the party (COMPARISON), the date as its quote states it (TIMELINE), the step (FLOW), or the measure and period (METRIC). */
    label: z.string().min(1).max(48),
});
/**
 * One labeled entry of excerpt cells.
 *
 * @openapiSchema EntityAnalysisFigureEntry
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisFigureSchema
 * @contractShape entity.analysis-figure-entry
 * @contractRole canonical
 */
export const EntityAnalysisFigureEntrySchema = EntityAnalysisFigureEntrySchemaDefinition;
//# sourceMappingURL=analysis-figure-entry.js.map