import { z } from "zod/v4";
declare const ResearchSnippetTypeSchemaDefinition: z.ZodObject<{
    analysisRenderable: z.ZodBoolean;
    curated: z.ZodBoolean;
    defaultVisible: z.ZodBoolean;
    label: z.ZodString;
    minLength: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    paragraphShape: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        maxChars: z.ZodInt;
        maxParagraphs: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        maxSentences: z.ZodInt;
        minChars: z.ZodInt;
        minParagraphs: z.ZodInt;
        minSentences: z.ZodInt;
    }, z.core.$strip>>>;
    recognized: z.ZodBoolean;
    targetPath: z.ZodString;
    typeValue: z.ZodString;
}, z.core.$strip>;
type ResearchSnippetTypeDefinition = z.infer<typeof ResearchSnippetTypeSchemaDefinition>;
/**
 * Canonical research snippet type with the governance rules write callers must satisfy.
 *
 * @openapiSchema ResearchSnippetType
 * @endpoint GET /v1/entities/research/snippets/types
 * @contractShape research.snippet-type
 * @contractRole canonical
 */
export declare const ResearchSnippetTypeSchema: z.ZodType<ResearchSnippetTypeDefinition>;
export type ResearchSnippetType = z.infer<typeof ResearchSnippetTypeSchema>;
export {};
//# sourceMappingURL=snippet-type.d.ts.map