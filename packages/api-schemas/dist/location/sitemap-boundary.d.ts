import { z } from "zod/v4";
declare const LocationSitemapBoundarySchemaDefinition: z.ZodObject<{
    latestUpdatedAt: z.ZodISODateTime;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    page: z.ZodInt;
}, z.core.$strip>;
type LocationSitemapBoundaryDefinition = z.infer<typeof LocationSitemapBoundarySchemaDefinition>;
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
export declare const LocationSitemapBoundarySchema: z.ZodType<LocationSitemapBoundaryDefinition>;
export type LocationSitemapBoundary = z.infer<typeof LocationSitemapBoundarySchema>;
export {};
//# sourceMappingURL=sitemap-boundary.d.ts.map