// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PublicationRelationSchema } from "./relation.js";
import { PublicationTypeSchema } from "./type.js";
const PublicationFilterSchemaDefinition = z.object({
    /** Public content type filter. */
    contentType: PublicationTypeSchema.nullish(),
    /** Owner relation filter. */
    relation: PublicationRelationSchema.nullish(),
    /** Topic key or source category. */
    topic: z.string().nullish(),
    /** Best-effort content year filter. */
    year: z.int().nullish(),
});
/**
 * Canonical filters for public content cards.
 *
 * @openapiSchema PublicationFilter
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PublicationSearchInterpretationSchema
 * @contractShape publication.filter
 * @contractRole canonical
 */
export const PublicationFilterSchema = PublicationFilterSchemaDefinition;
//# sourceMappingURL=filter.js.map