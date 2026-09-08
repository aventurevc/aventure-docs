import { z } from "zod/v4";
/**
 * Slug resolution pair for sitemap hydration
 *
 * @openapiSchema LocationSlugResolution
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape location.slug-resolution
 * @contractRole canonical
 */
export declare const LocationSlugResolutionSchema: z.ZodObject<{
    canonicalSlug: z.ZodString;
    matched: z.ZodBoolean;
    outcome: z.ZodOptional<z.ZodEnum<{
        current: "current";
        unpublished: "unpublished";
    }>>;
    seoSlug: z.ZodString;
}, z.core.$strip>;
export type LocationSlugResolution = z.infer<typeof LocationSlugResolutionSchema>;
//# sourceMappingURL=slug-resolution.d.ts.map