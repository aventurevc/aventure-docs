import { z } from "zod/v4";
declare const EntityAnalysisFigureEntrySchemaDefinition: z.ZodObject<{
    cell: z.ZodArray<z.ZodType<{
        citation: number;
        excerpt: string;
    }, import("./analysis-figure-cell.ts").EntityAnalysisFigureCellSchemaInput, z.core.$ZodTypeInternals<{
        citation: number;
        excerpt: string;
    }, import("./analysis-figure-cell.ts").EntityAnalysisFigureCellSchemaInput>>>;
    label: z.ZodString;
}, z.core.$strip>;
type EntityAnalysisFigureEntryDefinition = z.infer<typeof EntityAnalysisFigureEntrySchemaDefinition>;
export interface EntityAnalysisFigureEntrySchemaInput extends z.input<typeof EntityAnalysisFigureEntrySchemaDefinition> {
}
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
export declare const EntityAnalysisFigureEntrySchema: z.ZodType<EntityAnalysisFigureEntryDefinition, EntityAnalysisFigureEntrySchemaInput>;
export type EntityAnalysisFigureEntry = z.infer<typeof EntityAnalysisFigureEntrySchema>;
export {};
//# sourceMappingURL=analysis-figure-entry.d.ts.map