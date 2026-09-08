// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SlugResourceSchema } from "./slug-resource.js";
/**
 * Redirect slug path
 *
 * @openapiSchema RedirectSlugPath
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape redirect.redirect-slug-path
 * @contractRole canonical
 */
export const RedirectSlugPathSchema = z.object({
    newUrl: z.string().nullish(),
    oldUrl: z.string(),
    targetCurrentSlug: z.string().nullish(),
    targetId: z.string().nullish(),
    targetResourceType: SlugResourceSchema.nullish(),
});
//# sourceMappingURL=redirect-slug-path.js.map