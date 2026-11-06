// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityWriterParagraphAnalysisSchema } from "./writer-paragraph-analysis.js";
import { WriterPositioningElementSchema } from "../writer/positioning-element.js";
const EntityWriterParagraphSchemaDefinition = z.object({
    /** Overall research answer assigned to this paragraph. */
    analysis: EntityWriterParagraphAnalysisSchema,
    /** Output claims this paragraph states, in order. */
    claim: z.array(z.int()),
    /** Positioning decisions this paragraph must consume. */
    positioning: z.array(WriterPositioningElementSchema),
});
/**
 * One planned entity-text paragraph without framework sections.
 *
 * @openapiSchema EntityWriterParagraph
 * @endpoint POST /v1/research/runs
 * @usedBySchema EntityWriterBriefSchema
 * @contractShape entity.writer-paragraph
 * @contractRole canonical
 */
export const EntityWriterParagraphSchema = EntityWriterParagraphSchemaDefinition;
//# sourceMappingURL=writer-paragraph.js.map