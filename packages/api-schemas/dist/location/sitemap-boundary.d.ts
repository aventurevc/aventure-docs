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
 * @endpoint GET /v1/entities/sitemap-boundaries
 * @endpoint GET /v1/entities/sitemap-url-boundaries
 * @endpoint GET /v1/news/sitemap-boundaries
 * @endpoint GET /v1/people/sitemap-boundaries
 * @endpoint GET /v1/sitemap/url-slot-boundaries
 * @usedBySchema LocationSitemapBoundaryDetailSchema
 * @contractShape location.sitemap-boundary
 * @contractRole canonical
 */
export declare const LocationSitemapBoundarySchema: z.ZodType<LocationSitemapBoundaryDefinition>;
export type LocationSitemapBoundary = z.infer<typeof LocationSitemapBoundarySchema>;
export {};
//# sourceMappingURL=sitemap-boundary.d.ts.map