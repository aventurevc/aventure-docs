// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterPositioningElementSchemaKnownMembers = z.enum([
    "CATEGORY",
    "BUYER",
    "APPROACH",
    "DIFFERENTIATION",
    "ALTERNATIVE",
]);
/**
 * Research-selected category, buyer, approach, differentiation, or alternative.
 *
 * @openapiSchema WriterPositioningElement
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterParagraphSchema
 * @usedBySchema WriterPositioningSchema
 * @contractShape writer.positioning-element
 * @contractRole canonical
 */
export const WriterPositioningElementSchema = Object.assign(z.union([WriterPositioningElementSchemaKnownMembers, z.string()]), { enum: WriterPositioningElementSchemaKnownMembers.enum });
//# sourceMappingURL=positioning-element.js.map