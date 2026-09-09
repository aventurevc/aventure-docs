import { z } from "zod/v4";
/**
 * Canonical entity sitemap URL slot kind.
 *
 * @openapiSchema EntitySitemapUrlType
 * @endpoint GET /v1/sitemap/entities/urls
 * @usedBySchema EntitySitemapUrlSchema
 * @contractShape entity.sitemap-url-type
 * @contractRole canonical
 */
export declare const EntitySitemapUrlTypeSchema: z.ZodEnum<{
    acquisitions: "acquisitions";
    analysis: "analysis";
    employees: "employees";
    fundraising: "fundraising";
    news: "news";
    overview: "overview";
    productService: "productService";
}>;
export type EntitySitemapUrlType = z.infer<typeof EntitySitemapUrlTypeSchema>;
//# sourceMappingURL=sitemap-url-type.d.ts.map