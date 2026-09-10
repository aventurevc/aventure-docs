import { z } from "zod/v4";
declare const LocationSitemapBoundaryDetailSchemaDefinition: z.ZodObject<{
    boundary: z.ZodArray<z.ZodType<{
        latestUpdatedAt: string;
        nextCursor?: string | null | undefined;
        page: number;
    }, unknown, z.core.$ZodTypeInternals<{
        latestUpdatedAt: string;
        nextCursor?: string | null | undefined;
        page: number;
    }, unknown>>>;
    size: z.ZodInt;
    total: z.ZodInt;
}, z.core.$strip>;
type LocationSitemapBoundaryDetailDefinition = z.infer<typeof LocationSitemapBoundaryDetailSchemaDefinition>;
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
export declare const LocationSitemapBoundaryDetailSchema: z.ZodType<LocationSitemapBoundaryDetailDefinition>;
export type LocationSitemapBoundaryDetail = z.infer<typeof LocationSitemapBoundaryDetailSchema>;
export {};
//# sourceMappingURL=sitemap-boundary-detail.d.ts.map