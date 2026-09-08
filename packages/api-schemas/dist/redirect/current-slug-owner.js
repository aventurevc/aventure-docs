// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SlugResourceSchema } from "./slug-resource.js";
/**
 * Current slug owner
 *
 * @openapiSchema CurrentSlugOwner
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape redirect.current-slug-owner
 * @contractRole canonical
 */
export const CurrentSlugOwnerSchema = z.object({
    deletedAt: z.iso.datetime({ offset: true }).nullish(),
    id: z.string(),
    isHidden: z.boolean(),
    nameBrand: z.string().nullish(),
    resourceType: SlugResourceSchema,
    showOnSitemap: z.boolean(),
    slug: z.string(),
});
//# sourceMappingURL=current-slug-owner.js.map