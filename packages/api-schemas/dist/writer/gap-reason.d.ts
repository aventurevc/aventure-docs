import { z } from "zod/v4";
/**
 * Reason a research gap remains unresolved.
 *
 * @openapiSchema WriterGapReason
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterGapSchema
 * @contractShape writer.gap-reason
 * @contractRole canonical
 */
export declare const WriterGapReasonSchema: z.ZodUnion<readonly [z.ZodEnum<{
    CONFLICTING: "CONFLICTING";
    NOT_APPLICABLE: "NOT_APPLICABLE";
    NOT_DISCLOSED: "NOT_DISCLOSED";
    NOT_FOUND: "NOT_FOUND";
}>, z.ZodString]> & {
    enum: {
        CONFLICTING: "CONFLICTING";
        NOT_APPLICABLE: "NOT_APPLICABLE";
        NOT_DISCLOSED: "NOT_DISCLOSED";
        NOT_FOUND: "NOT_FOUND";
    };
};
export type WriterGapReason = z.infer<typeof WriterGapReasonSchema>;
//# sourceMappingURL=gap-reason.d.ts.map