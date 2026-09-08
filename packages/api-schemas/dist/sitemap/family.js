// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Dynamic sitemap family served by the sitemap index manifest
 *
 * @openapiSchema SitemapFamily
 * @endpoint GET /v1/sitemap/index-manifest
 * @endpoint GET /v1/sitemap/url-slots
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema SitemapFamilyEntrySchema
 * @usedBySchema SitemapUrlSlotSchema
 * @contractShape sitemap.family
 * @contractRole canonical
 */
export const SitemapFamilySchema = z.enum([
    "companyUrl",
    "governmentUrl",
    "nonprofitUrl",
    "investorUrl",
    "person",
    "news",
    "personImage",
    "companyImage",
    "blogArticle",
    "blogCategory",
    "blogTag",
    "locationCountry",
    "locationState",
    "locationCity",
]);
//# sourceMappingURL=family.js.map