// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchParagraphShapeSchema } from "../research/paragraph-shape.js";
const TextTypeOptionSchemaDefinition = z.object({
    /** Canonical textType value. */
    canonical: z.string(),
    /** Maximum words allowed by the governed text contract. */
    maxWords: z.int().nullish(),
    /** Minimum words allowed by the governed text contract. */
    minWords: z.int().nullish(),
    /** Paragraph-shape rule returned by the governed text contract. */
    paragraphShape: ResearchParagraphShapeSchema.nullish(),
    /** Whether the textType requires trusted read visibility. */
    privateType: z.boolean(),
    /** Rewrite guidance returned by the governed text contract. */
    rewriteHint: z.string().nullish(),
});
/**
 * Canonical textType value accepted by text endpoints; entity rows include minWords, maxWords, rewriteHint, and paragraphShape when a governed text contract applies.
 *
 * @openapiSchema TextTypeOption
 * @endpoint GET /v1/entities/texts/types
 * @endpoint GET /v1/people/texts/types
 * @contractShape text.type-option
 * @contractRole canonical
 */
export const TextTypeOptionSchema = TextTypeOptionSchemaDefinition;
//# sourceMappingURL=type-option.js.map