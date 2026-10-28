import { z } from "zod/v4";
declare const WriterParagraphSchemaDefinition: z.ZodObject<{
    analysis: z.ZodOptional<z.ZodObject<{
        answer: z.ZodBoolean;
        section: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    claim: z.ZodArray<z.ZodInt>;
    positioning: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>>;
}, z.core.$strip>;
type WriterParagraphDefinition = z.infer<typeof WriterParagraphSchemaDefinition>;
export interface WriterParagraphSchemaInput extends z.input<typeof WriterParagraphSchemaDefinition> {
}
/**
 * One planned paragraph.
 *
 * @openapiSchema WriterParagraph
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterBriefSchema
 * @contractShape writer.paragraph
 * @contractRole canonical
 */
export declare const WriterParagraphSchema: z.ZodType<WriterParagraphDefinition, WriterParagraphSchemaInput>;
export type WriterParagraph = z.infer<typeof WriterParagraphSchema>;
export {};
//# sourceMappingURL=paragraph.d.ts.map