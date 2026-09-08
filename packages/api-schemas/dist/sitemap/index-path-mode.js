// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * How the sitemap index path should be expanded by the front-end sitemap builder
 *
 * @openapiSchema SitemapIndexPathMode
 * @endpoint GET /v1/sitemap/index-manifest
 * @usedBySchema SitemapFamilyEntrySchema
 * @contractShape sitemap.index-path-mode
 * @contractRole canonical
 */
export const SitemapIndexPathModeSchema = z.enum(["pageBase", "singleFile"]);
//# sourceMappingURL=index-path-mode.js.map