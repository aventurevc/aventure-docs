// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SitemapFamilySchema } from "./family.js";
const SitemapUrlSlotSchemaDefinition = z.object({
    family: SitemapFamilySchema,
    imagePath: z.string().nullish(),
    lastUpdatedAt: z.iso.datetime({ offset: true }),
    path: z.string(),
    slotKey: z.string(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
});
/**
 * Concrete sitemap URL slot with backend-owned path and lastmod.
 *
 * @openapiSchema SitemapUrlSlot
 * @endpoint GET /v1/sitemap/url-slots
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema PageResultSitemapUrlSlotSchema
 * @usedBySchema PageSitemapUrlSlotSchema
 * @contractShape sitemap.url-slot
 * @contractRole canonical
 */
export const SitemapUrlSlotSchema = SitemapUrlSlotSchemaDefinition;
//# sourceMappingURL=url-slot.js.map