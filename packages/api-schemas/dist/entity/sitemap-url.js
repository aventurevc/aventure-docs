// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySitemapUrlTypeSchema } from "./sitemap-url-type.js";
import { EntityTypeSchema } from "./type.js";
const EntitySitemapUrlSchemaDefinition = z.object({
    /** Entity that owns this sitemap URL slot. */
    entityId: z.uuid(),
    /** Latest backend update timestamp affecting this concrete URL. */
    lastUpdatedAt: z.iso.datetime({ offset: true }),
    /** Backend-owned public path, relative to the production origin. */
    path: z.string(),
    /** Product/service child slug for productService slots. */
    productServiceSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    /** Stable cursor and dedupe key for this sitemap URL slot. */
    slotKey: z.string(),
    /** Canonical entity slug. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** Canonical entity type for the owning entity. */
    typeRecord: EntityTypeSchema,
    /** Kind of entity URL represented by this slot. */
    urlType: EntitySitemapUrlTypeSchema,
});
/**
 * Concrete entity sitemap URL slot with backend-owned path and lastmod.
 *
 * @openapiSchema EntitySitemapUrl
 * @endpoint GET /v1/sitemap/entities/urls
 * @usedBySchema PageEntitySitemapUrlSchema
 * @contractShape entity.sitemap-url
 * @contractRole canonical
 */
export const EntitySitemapUrlSchema = EntitySitemapUrlSchemaDefinition;
//# sourceMappingURL=sitemap-url.js.map