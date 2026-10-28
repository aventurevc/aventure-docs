import { z } from "zod/v4";
declare const EntityAnalysisFigureSchemaDefinition: z.ZodObject<{
    column: z.ZodOptional<z.ZodArray<z.ZodString>>;
    entry: z.ZodArray<z.ZodType<{
        cell: {
            citation: number;
            excerpt: string;
        }[];
        label: string;
    }, import("./analysis-figure-entry.ts").EntityAnalysisFigureEntrySchemaInput, z.core.$ZodTypeInternals<{
        cell: {
            citation: number;
            excerpt: string;
        }[];
        label: string;
    }, import("./analysis-figure-entry.ts").EntityAnalysisFigureEntrySchemaInput>>>;
    title: z.ZodString;
    type: z.ZodUnion<readonly [z.ZodEnum<{
        COMPARISON: "COMPARISON";
        FLOW: "FLOW";
        METRIC: "METRIC";
        TIMELINE: "TIMELINE";
    }>, z.ZodString]> & {
        enum: {
            COMPARISON: "COMPARISON";
            FLOW: "FLOW";
            METRIC: "METRIC";
            TIMELINE: "TIMELINE";
        };
    };
}, z.core.$strip>;
type EntityAnalysisFigureDefinition = z.infer<typeof EntityAnalysisFigureSchemaDefinition>;
export interface EntityAnalysisFigureSchemaInput extends z.input<typeof EntityAnalysisFigureSchemaDefinition> {
}
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
export declare const EntityAnalysisFigureSchema: z.ZodType<EntityAnalysisFigureDefinition, EntityAnalysisFigureSchemaInput>;
export type EntityAnalysisFigure = z.infer<typeof EntityAnalysisFigureSchema>;
export {};
//# sourceMappingURL=analysis-figure.d.ts.map