import { z } from "zod/v4";
declare const EntityWriterParagraphSchemaDefinition: z.ZodObject<{
    analysis: z.ZodType<{
        answer: boolean;
    }, import("./writer-paragraph-analysis.ts").EntityWriterParagraphAnalysisSchemaInput, z.core.$ZodTypeInternals<{
        answer: boolean;
    }, import("./writer-paragraph-analysis.ts").EntityWriterParagraphAnalysisSchemaInput>>;
    claim: z.ZodArray<z.ZodInt>;
    positioning: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>;
}, z.core.$strip>;
type EntityWriterParagraphDefinition = z.infer<typeof EntityWriterParagraphSchemaDefinition>;
export interface EntityWriterParagraphSchemaInput extends z.input<typeof EntityWriterParagraphSchemaDefinition> {
}
/**
 * One planned entity-text paragraph without framework sections.
 *
 * @openapiSchema EntityWriterParagraph
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterBriefSchema
 * @contractShape entity.writer-paragraph
 * @contractRole canonical
 */
export declare const EntityWriterParagraphSchema: z.ZodType<EntityWriterParagraphDefinition, EntityWriterParagraphSchemaInput>;
export type EntityWriterParagraph = z.infer<typeof EntityWriterParagraphSchema>;
export {};
//# sourceMappingURL=writer-paragraph.d.ts.map