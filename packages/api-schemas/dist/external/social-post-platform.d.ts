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
export declare const ExternalSocialPostPlatformSchema: z.ZodEnum<{
    facebook: "facebook";
    instagram: "instagram";
    linkedin: "linkedin";
    other: "other";
    threads: "threads";
    tiktok: "tiktok";
    xTwitter: "xTwitter";
}>;
export type ExternalSocialPostPlatform = z.infer<typeof ExternalSocialPostPlatformSchema>;
//# sourceMappingURL=social-post-platform.d.ts.map