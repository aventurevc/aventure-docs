import { z } from "zod/v4";
declare const SitemapUrlSlotSchemaDefinition: z.ZodObject<{
    family: z.ZodEnum<{
        blogArticle: "blogArticle";
        blogCategory: "blogCategory";
        blogTag: "blogTag";
        companyImage: "companyImage";
        companyUrl: "companyUrl";
        governmentUrl: "governmentUrl";
        investorUrl: "investorUrl";
        locationCity: "locationCity";
        locationCountry: "locationCountry";
        locationState: "locationState";
        news: "news";
        nonprofitUrl: "nonprofitUrl";
        person: "person";
        personImage: "personImage";
    }>;
    imagePath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastUpdatedAt: z.ZodISODateTime;
    path: z.ZodString;
    slotKey: z.ZodString;
    slug: z.ZodString;
}, z.core.$strip>;
type SitemapUrlSlotDefinition = z.infer<typeof SitemapUrlSlotSchemaDefinition>;
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
export declare const SitemapUrlSlotSchema: z.ZodType<SitemapUrlSlotDefinition>;
export type SitemapUrlSlot = z.infer<typeof SitemapUrlSlotSchema>;
export {};
//# sourceMappingURL=url-slot.d.ts.map