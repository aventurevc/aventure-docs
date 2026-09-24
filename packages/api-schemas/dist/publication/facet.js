// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PublicationTypeSchema } from "./type.js";
const PublicationFacetSchemaDefinition = z.object({
    /** Public content source type. */
    contentType: PublicationTypeSchema,
    /** Content cards with this topic and content type. */
    count: z.number().int(),
    /** Topic key; null when the content carries no topic. */
    topic: z.string().nullish(),
});
/**
 * Number of content cards sharing one topic and content type in an owner's index.
 *
 * @openapiSchema PublicationFacet
 * @endpoint GET /v1/entities/{entityId}/content/facets
 * @endpoint GET /v1/people/{personId}/content/facets
 * @contractShape publication.facet
 * @contractRole canonical
 */
export const PublicationFacetSchema = PublicationFacetSchemaDefinition;
//# sourceMappingURL=facet.js.map