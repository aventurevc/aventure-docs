import { z } from "zod/v4";
/**
 * Research-selected category, buyer, approach, differentiation, or alternative.
 *
 * @openapiSchema WriterPositioningElement
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterParagraphSchema
 * @usedBySchema WriterPositioningSchema
 * @contractShape writer.positioning-element
 * @contractRole canonical
 */
export declare const WriterPositioningElementSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ALTERNATIVE: "ALTERNATIVE";
    APPROACH: "APPROACH";
    BUYER: "BUYER";
    CATEGORY: "CATEGORY";
    DIFFERENTIATION: "DIFFERENTIATION";
}>, z.ZodString]> & {
    enum: {
        ALTERNATIVE: "ALTERNATIVE";
        APPROACH: "APPROACH";
        BUYER: "BUYER";
        CATEGORY: "CATEGORY";
        DIFFERENTIATION: "DIFFERENTIATION";
    };
};
export type WriterPositioningElement = z.infer<typeof WriterPositioningElementSchema>;
//# sourceMappingURL=positioning-element.d.ts.map