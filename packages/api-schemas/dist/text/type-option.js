// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchParagraphShapeSchema } from "../research/paragraph-shape.js";
const TextTypeOptionSchemaDefinition = z.object({
    /** Canonical textType value. */
    canonical: z.string(),
    /** Maximum words allowed for this text type. */
    maxWords: z.int().nullish(),
    /** Minimum words allowed for this text type. */
    minWords: z.int().nullish(),
    /** Paragraph rules for this text type. */
    paragraphShape: ResearchParagraphShapeSchema.nullish(),
    /** Whether the textType requires trusted read visibility. */
    privateType: z.boolean(),
    /** Advice for rewriting text that breaks this type's rules. */
    rewriteHint: z.string().nullish(),
});
/**
 * A text type the text endpoints accept; entity rows include minWords, maxWords, rewriteHint, and paragraphShape when that type has length and paragraph rules.
 *
 * @openapiSchema TextTypeOption
 * @endpoint GET /v1/entities/texts/types
 * @contractShape text.type-option
 * @contractRole canonical
 */
export const TextTypeOptionSchema = TextTypeOptionSchemaDefinition;
//# sourceMappingURL=type-option.js.map