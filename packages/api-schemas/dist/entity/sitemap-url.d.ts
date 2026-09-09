import { z } from "zod/v4";
declare const EntitySitemapUrlSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    lastUpdatedAt: z.ZodISODateTime;
    path: z.ZodString;
    productServiceSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slotKey: z.ZodString;
    slug: z.ZodString;
    typeRecord: z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>;
    urlType: z.ZodEnum<{
        acquisitions: "acquisitions";
        analysis: "analysis";
        employees: "employees";
        fundraising: "fundraising";
        news: "news";
        overview: "overview";
        productService: "productService";
    }>;
}, z.core.$strip>;
type EntitySitemapUrlDefinition = z.infer<typeof EntitySitemapUrlSchemaDefinition>;
/**
 * Concrete entity sitemap URL slot with backend-owned path and lastmod.
 *
 * @openapiSchema EntitySitemapUrl
 * @endpoint GET /v1/sitemap/entities/urls
 * @usedBySchema PageEntitySitemapUrlSchema
 * @contractShape entity.sitemap-url
 * @contractRole canonical
 */
export declare const EntitySitemapUrlSchema: z.ZodType<EntitySitemapUrlDefinition>;
export type EntitySitemapUrl = z.infer<typeof EntitySitemapUrlSchema>;
export {};
//# sourceMappingURL=sitemap-url.d.ts.map