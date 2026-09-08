// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LocationSitemapBoundarySchemaDefinition = z.object({
    latestUpdatedAt: z.iso.datetime({ offset: true }),
    nextCursor: z.string().nullish(),
    page: z.int(),
});
/**
 * Sitemap page boundary with page number and latest timestamp
 *
 * @openapiSchema LocationSitemapBoundary
 * @endpoint GET /v1/entities/sitemap-boundaries
 * @endpoint GET /v1/entities/sitemap-url-boundaries
 * @endpoint GET /v1/news/sitemap-boundaries
 * @endpoint GET /v1/people/sitemap-boundaries
 * @endpoint GET /v1/sitemap/url-slot-boundaries
 * @usedBySchema LocationSitemapBoundaryDetailSchema
 * @contractShape location.sitemap-boundary
 * @contractRole canonical
 */
export const LocationSitemapBoundarySchema = LocationSitemapBoundarySchemaDefinition;
//# sourceMappingURL=sitemap-boundary.js.map