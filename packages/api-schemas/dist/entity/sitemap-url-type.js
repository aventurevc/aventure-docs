// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical entity sitemap URL slot kind.
 *
 * @openapiSchema EntitySitemapUrlType
 * @endpoint GET /v1/sitemap/entities/urls
 * @usedBySchema EntitySitemapUrlSchema
 * @contractShape entity.sitemap-url-type
 * @contractRole canonical
 */
export const EntitySitemapUrlTypeSchema = z.enum([
    "overview",
    "acquisitions",
    "analysis",
    "fundraising",
    "employees",
    "news",
    "productService",
]);
//# sourceMappingURL=sitemap-url-type.js.map