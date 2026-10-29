// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterParagraphAnalysisSchema } from "./paragraph-analysis.js";
import { WriterPositioningElementSchema } from "./positioning-element.js";
const WriterParagraphSchemaDefinition = z.object({
    /** Meta-analysis judgments this paragraph must consume. */
    analysis: WriterParagraphAnalysisSchema.optional(),
    /** Output claims this paragraph states, in order. */
    claim: z.array(z.int()),
    /** Positioning decisions this paragraph must consume; each declared decision at most once across paragraphs. Assign all claims cited by a decision to its paragraph. An unlisted decision goes to the paragraph of its first cited claim. */
    positioning: z.array(WriterPositioningElementSchema).optional(),
});
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
export const WriterParagraphSchema = WriterParagraphSchemaDefinition;
//# sourceMappingURL=paragraph.js.map