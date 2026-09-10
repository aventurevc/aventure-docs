// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LocationSitemapBoundarySchema } from "./sitemap-boundary.js";
const LocationSitemapBoundaryDetailSchemaDefinition = z.object({
    boundary: z.array(LocationSitemapBoundarySchema),
    size: z.int(),
    total: z.int(),
});
/**
 * Complete sitemap boundary metadata for a domain O(1) boundary endpoint payload replacing O(N) cursor traversal for sitemap index lastmod generation
 *
 * @openapiSchema LocationSitemapBoundaryDetail
 * @endpoint GET /v1/sitemap/entities/boundaries
 * @endpoint GET /v1/sitemap/entities/urls/boundaries
 * @endpoint GET /v1/sitemap/news/boundaries
 * @endpoint GET /v1/sitemap/people/boundaries
 * @endpoint GET /v1/sitemap/url-slots/boundaries
 * @contractShape location.sitemap-boundary-detail
 * @contractRole canonical
 */
export const LocationSitemapBoundaryDetailSchema = LocationSitemapBoundaryDetailSchemaDefinition;
//# sourceMappingURL=sitemap-boundary-detail.js.map