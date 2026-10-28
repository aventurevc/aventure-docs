// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisFigureEntrySchema } from "./analysis-figure-entry.js";
import { EntityAnalysisFigureTypeSchema } from "./analysis-figure-type.js";
const EntityAnalysisFigureSchemaDefinition = z.object({
    /** COMPARISON column headings (1-4, each 1-48 characters), one per cell in every entry; empty otherwise. */
    column: z.array(z.string()).optional(),
    /** Entries in display order: 2-8, or 1-8 for METRIC. */
    entry: z.array(EntityAnalysisFigureEntrySchema),
    /** Caption stating what the figure shows. */
    title: z.string().min(1).max(100),
    /** Layout that decides how entries and columns render. */
    type: EntityAnalysisFigureTypeSchema,
});
/**
 * One figure illustrating its section; every cell is a verbatim excerpt of a section quote.
 *
 * @openapiSchema EntityAnalysisFigure
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionMutationSchema
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-figure
 * @contractRole canonical
 */
export const EntityAnalysisFigureSchema = EntityAnalysisFigureSchemaDefinition;
//# sourceMappingURL=analysis-figure.js.map