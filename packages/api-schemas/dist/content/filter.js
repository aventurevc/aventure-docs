// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentRelationSchema } from "./relation.js";
import { ContentTypeSchema } from "./type.js";
const ContentFilterSchemaDefinition = z.object({
    /** Public content type filter. */
    contentType: ContentTypeSchema.nullish(),
    /** Owner relation filter. */
    relation: ContentRelationSchema.nullish(),
    /** Topic key or source category. */
    topic: z.string().nullish(),
    /** Best-effort content year filter. */
    year: z.int().nullish(),
});
/**
 * Canonical filters for public content cards.
 *
 * @openapiSchema ContentFilter
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchInterpretationSchema
 * @contractShape content.filter
 * @contractRole canonical
 */
export const ContentFilterSchema = ContentFilterSchemaDefinition;
//# sourceMappingURL=filter.js.map