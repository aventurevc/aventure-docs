import { z } from "zod/v4";
declare const TextTypeOptionSchemaDefinition: z.ZodObject<{
    canonical: z.ZodString;
    maxWords: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    minWords: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    paragraphShape: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        maxChars: z.ZodInt;
        maxParagraphs: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        maxSentences: z.ZodInt;
        minChars: z.ZodInt;
        minParagraphs: z.ZodInt;
        minSentences: z.ZodInt;
    }, z.core.$strip>>>;
    privateType: z.ZodBoolean;
    rewriteHint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type TextTypeOptionDefinition = z.infer<typeof TextTypeOptionSchemaDefinition>;
/**
 * Canonical textType value accepted by text endpoints; entity rows include minWords, maxWords, rewriteHint, and paragraphShape when a governed text contract applies.
 *
 * @openapiSchema TextTypeOption
 * @endpoint GET /v1/entities/texts/types
 * @endpoint GET /v1/people/texts/types
 * @contractShape text.type-option
 * @contractRole canonical
 */
export declare const TextTypeOptionSchema: z.ZodType<TextTypeOptionDefinition>;
export type TextTypeOption = z.infer<typeof TextTypeOptionSchema>;
export {};
//# sourceMappingURL=type-option.d.ts.map