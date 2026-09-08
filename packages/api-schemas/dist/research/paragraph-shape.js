// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const ResearchParagraphShapeSchema = z.object({
    /** Maximum characters per paragraph (inclusive). */
    maxChars: z.int(),
    /** Maximum paragraph count (inclusive); null means unbounded. */
    maxParagraphs: z.int().nullish(),
    /** Maximum sentences per paragraph (inclusive). */
    maxSentences: z.int(),
    /** Minimum characters per paragraph (inclusive). */
    minChars: z.int(),
    /** Minimum paragraph count (inclusive). */
    minParagraphs: z.int(),
    /** Minimum sentences per paragraph (inclusive). */
    minSentences: z.int(),
});
//# sourceMappingURL=paragraph-shape.js.map