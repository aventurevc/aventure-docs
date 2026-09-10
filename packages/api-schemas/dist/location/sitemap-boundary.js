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
 * @endpoint GET /v1/sitemap/entities/boundaries
 * @endpoint GET /v1/sitemap/entities/urls/boundaries
 * @endpoint GET /v1/sitemap/news/boundaries
 * @endpoint GET /v1/sitemap/people/boundaries
 * @endpoint GET /v1/sitemap/url-slots/boundaries
 * @usedBySchema LocationSitemapBoundaryDetailSchema
 * @contractShape location.sitemap-boundary
 * @contractRole canonical
 */
export const LocationSitemapBoundarySchema = LocationSitemapBoundarySchemaDefinition;
//# sourceMappingURL=sitemap-boundary.js.map