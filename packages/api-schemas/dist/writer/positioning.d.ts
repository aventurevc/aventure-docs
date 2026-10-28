import { z } from "zod/v4";
declare const WriterPositioningSchemaDefinition: z.ZodObject<{
    claim: z.ZodArray<z.ZodInt>;
    element: z.ZodUnion<readonly [z.ZodEnum<{
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
    statement: z.ZodString;
}, z.core.$strip>;
type WriterPositioningDefinition = z.infer<typeof WriterPositioningSchemaDefinition>;
export interface WriterPositioningSchemaInput extends z.input<typeof WriterPositioningSchemaDefinition> {
}
/**
 * One positioning decision and supporting claims.
 *
 * @openapiSchema WriterPositioning
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterBriefSchema
 * @contractShape writer.positioning
 * @contractRole canonical
 */
export declare const WriterPositioningSchema: z.ZodType<WriterPositioningDefinition, WriterPositioningSchemaInput>;
export type WriterPositioning = z.infer<typeof WriterPositioningSchema>;
export {};
//# sourceMappingURL=positioning.d.ts.map