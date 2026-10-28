// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterPositioningElementSchema } from "./positioning-element.js";
const WriterPositioningSchemaDefinition = z.object({
    /** Supporting evidence claim numbers. */
    claim: z.array(z.int()),
    /** Positioning element decided by research. */
    element: WriterPositioningElementSchema,
    /** Position in plain words. */
    statement: z.string(),
});
/**
 * One positioning decision and supporting claims.
 *
 * @openapiSchema WriterPositioning
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterBriefSchema
 * @contractShape writer.positioning
 * @contractRole canonical
 */
export const WriterPositioningSchema = WriterPositioningSchemaDefinition;
//# sourceMappingURL=positioning.js.map