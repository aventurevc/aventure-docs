import { z } from "zod/v4";
/**
 * Figure layout: COMPARISON matrix of parties by attribute, dated TIMELINE, ordered FLOW of steps, or METRIC key figures.
 *
 * @openapiSchema EntityAnalysisFigureType
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisFigureSchema
 * @contractShape entity.analysis-figure-type
 * @contractRole canonical
 */
export declare const EntityAnalysisFigureTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
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
export type EntityAnalysisFigureType = z.infer<typeof EntityAnalysisFigureTypeSchema>;
//# sourceMappingURL=analysis-figure-type.d.ts.map