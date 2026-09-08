import { z } from "zod/v4";
/**
 * Write-time per-paragraph shape rule for governed text bodies. Paragraphs split on `\n\n` (one blank line). Each paragraph must satisfy minChars..maxChars and minSentences..maxSentences; whole body must satisfy minParagraphs..maxParagraphs (null maxParagraphs = unbounded). Sentence boundaries follow Unicode rules (java.text.BreakIterator), so 'Inc.' and 'U.S.' do not split a sentence.
 *
 * @openapiSchema ResearchParagraphShape
 * @endpoint GET /v1/entities/research/snippets/types
 * @endpoint GET /v1/entities/texts/types
 * @endpoint GET /v1/people/texts/types
 * @usedBySchema ResearchSnippetTypeSchema
 * @usedBySchema TextTypeOptionSchema
 * @contractShape research.paragraph-shape
 * @contractRole canonical
 */
export declare const ResearchParagraphShapeSchema: z.ZodObject<{
    maxChars: z.ZodInt;
    maxParagraphs: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    maxSentences: z.ZodInt;
    minChars: z.ZodInt;
    minParagraphs: z.ZodInt;
    minSentences: z.ZodInt;
}, z.core.$strip>;
export type ResearchParagraphShape = z.infer<typeof ResearchParagraphShapeSchema>;
//# sourceMappingURL=paragraph-shape.d.ts.map