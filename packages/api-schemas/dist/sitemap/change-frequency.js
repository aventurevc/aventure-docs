// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SitemapChangeFrequencySchema = z.enum([
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
]);
//# sourceMappingURL=change-frequency.js.map