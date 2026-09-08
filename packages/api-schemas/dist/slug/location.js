// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SlugResourceSchema } from "../redirect/slug-resource.js";
const SlugLocationSchemaDefinition = z.object({
    entityType: z.string().nullish(),
    id: z.string(),
    path: z.string(),
    resourceType: SlugResourceSchema,
    slug: z.string(),
    url: z.string(),
});
/**
 * Current slug location for a resource
 *
 * @openapiSchema SlugLocation
 * @endpoint GET /v1/entities/{entityId}/slug
 * @endpoint GET /v1/news/{newsId}/slug
 * @contractShape slug.location
 * @contractRole canonical
 */
export const SlugLocationSchema = SlugLocationSchemaDefinition;
//# sourceMappingURL=location.js.map