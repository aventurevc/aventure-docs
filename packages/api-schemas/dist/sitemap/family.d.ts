import { z } from "zod/v4";
/**
 * Dynamic sitemap family served by the sitemap index manifest
 *
 * @openapiSchema SitemapFamily
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema SitemapUrlSlotSchema
 * @contractShape sitemap.family
 * @contractRole canonical
 */
export declare const SitemapFamilySchema: z.ZodEnum<{
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
export type SitemapFamily = z.infer<typeof SitemapFamilySchema>;
//# sourceMappingURL=family.d.ts.map