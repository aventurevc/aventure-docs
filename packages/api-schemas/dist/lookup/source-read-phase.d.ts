import { z } from "zod/v4";
/**
 * Observed article-reading activity; unknown future phases retain their supplied copy.
 *
 * @openapiSchema LookupSourceReadPhase
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupSourceReadSchema
 * @contractShape lookup.source-read-phase
 * @contractRole canonical
 */
export declare const LookupSourceReadPhaseSchema: z.ZodUnion<readonly [z.ZodEnum<{
    MATCHING: "MATCHING";
    READING: "READING";
}>, z.ZodString]> & {
    enum: {
        MATCHING: "MATCHING";
        READING: "READING";
    };
};
export type LookupSourceReadPhase = z.infer<typeof LookupSourceReadPhaseSchema>;
//# sourceMappingURL=source-read-phase.d.ts.map