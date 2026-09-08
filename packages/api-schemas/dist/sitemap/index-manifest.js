// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SitemapFamilyEntrySchema } from "./family-entry.js";
const SitemapIndexManifestSchemaDefinition = z.object({
    families: z.array(SitemapFamilyEntrySchema),
});
/**
 * Manifest of dynamic sitemap families with O(1) freshness summaries
 *
 * @openapiSchema SitemapIndexManifest
 * @endpoint GET /v1/sitemap/index-manifest
 * @contractShape sitemap.index-manifest
 * @contractRole canonical
 */
export const SitemapIndexManifestSchema = SitemapIndexManifestSchemaDefinition;
//# sourceMappingURL=index-manifest.js.map