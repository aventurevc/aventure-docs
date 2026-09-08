import { z } from "zod/v4";
/**
 * sitemaps.org <changefreq> token
 *
 * @openapiSchema SitemapChangeFrequency
 * @endpoint GET /v1/sitemap/index-manifest
 * @usedBySchema SitemapFamilyEntrySchema
 * @contractShape sitemap.change-frequency
 * @contractRole canonical
 */
export declare const SitemapChangeFrequencySchema: z.ZodEnum<{
    always: "always";
    daily: "daily";
    hourly: "hourly";
    monthly: "monthly";
    never: "never";
    weekly: "weekly";
    yearly: "yearly";
}>;
export type SitemapChangeFrequency = z.infer<typeof SitemapChangeFrequencySchema>;
//# sourceMappingURL=change-frequency.d.ts.map