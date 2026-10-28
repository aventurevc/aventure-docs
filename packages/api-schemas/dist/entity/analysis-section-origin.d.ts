import { z } from "zod/v4";
/**
 * Author of a draft section: the run's agent or its signed-in owner.
 *
 * @openapiSchema EntityAnalysisSectionOrigin
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionMutationSchema
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-section-origin
 * @contractRole canonical
 */
export declare const EntityAnalysisSectionOriginSchema: z.ZodUnion<readonly [z.ZodEnum<{
    AGENT: "AGENT";
    USER: "USER";
}>, z.ZodString]> & {
    enum: {
        AGENT: "AGENT";
        USER: "USER";
    };
};
export type EntityAnalysisSectionOrigin = z.infer<typeof EntityAnalysisSectionOriginSchema>;
//# sourceMappingURL=analysis-section-origin.d.ts.map