// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SitemapChangeFrequencySchema } from "./change-frequency.js";
import { SitemapFamilySchema } from "./family.js";
import { SitemapIndexPathModeSchema } from "./index-path-mode.js";
const SitemapFamilyEntrySchemaDefinition = z.object({
    changeFrequency: SitemapChangeFrequencySchema,
    /** Current number of public URLs eligible for this sitemap family */
    eligibleUrlCount: z.int().min(0),
    family: SitemapFamilySchema,
    indexPath: z.string(),
    indexPathMode: SitemapIndexPathModeSchema,
    latestUpdatedAt: z.iso.datetime({ offset: true }).nullish(),
    pageCount: z.int(),
    priority: z.number(),
});
/**
 * One dynamic sitemap family with its O(1) freshness summary
 *
 * @openapiSchema SitemapFamilyEntry
 * @endpoint GET /v1/sitemap/index-manifest
 * @usedBySchema SitemapIndexManifestSchema
 * @contractShape sitemap.family-entry
 * @contractRole canonical
 */
export const SitemapFamilyEntrySchema = SitemapFamilyEntrySchemaDefinition;
//# sourceMappingURL=family-entry.js.map