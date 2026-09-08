// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Social platform that published an externally-authored post.
 *
 * @openapiSchema ExternalSocialPostPlatform
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @usedBySchema UrlSurfaceMisclassificationRouteSchema
 * @contractShape external.social-post-platform
 * @contractRole canonical
 */
export const ExternalSocialPostPlatformSchema = z.enum([
    "linkedin",
    "xTwitter",
    "facebook",
    "tiktok",
    "instagram",
    "threads",
    "other",
]);
//# sourceMappingURL=social-post-platform.js.map