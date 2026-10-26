import { z } from "zod/v4";
declare const EntityAnalysisFigureCellSchemaDefinition: z.ZodObject<{
    citation: z.ZodInt;
    excerpt: z.ZodString;
}, z.core.$strip>;
type EntityAnalysisFigureCellDefinition = z.infer<typeof EntityAnalysisFigureCellSchemaDefinition>;
export interface EntityAnalysisFigureCellSchemaInput extends z.input<typeof EntityAnalysisFigureCellSchemaDefinition> {
}
/**
 * A verbatim excerpt of one section citation's quote.
 *
 * @openapiSchema EntityAnalysisFigureCell
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisFigureEntrySchema
 * @contractShape entity.analysis-figure-cell
 * @contractRole canonical
 */
export declare const EntityAnalysisFigureCellSchema: z.ZodType<EntityAnalysisFigureCellDefinition, EntityAnalysisFigureCellSchemaInput>;
export type EntityAnalysisFigureCell = z.infer<typeof EntityAnalysisFigureCellSchema>;
export {};
//# sourceMappingURL=analysis-figure-cell.d.ts.map