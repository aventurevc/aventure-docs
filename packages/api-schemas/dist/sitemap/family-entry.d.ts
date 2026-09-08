import { z } from "zod/v4";
declare const SitemapFamilyEntrySchemaDefinition: z.ZodObject<{
    changeFrequency: z.ZodEnum<{
        always: "always";
        daily: "daily";
        hourly: "hourly";
        monthly: "monthly";
        never: "never";
        weekly: "weekly";
        yearly: "yearly";
    }>;
    eligibleUrlCount: z.ZodInt;
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
    indexPath: z.ZodString;
    indexPathMode: z.ZodEnum<{
        pageBase: "pageBase";
        singleFile: "singleFile";
    }>;
    latestUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    pageCount: z.ZodInt;
    priority: z.ZodNumber;
}, z.core.$strip>;
type SitemapFamilyEntryDefinition = z.infer<typeof SitemapFamilyEntrySchemaDefinition>;
/**
 * One dynamic sitemap family with its O(1) freshness summary
 *
 * @openapiSchema SitemapFamilyEntry
 * @endpoint GET /v1/sitemap/index-manifest
 * @usedBySchema SitemapIndexManifestSchema
 * @contractShape sitemap.family-entry
 * @contractRole canonical
 */
export declare const SitemapFamilyEntrySchema: z.ZodType<SitemapFamilyEntryDefinition>;
export type SitemapFamilyEntry = z.infer<typeof SitemapFamilyEntrySchema>;
export {};
//# sourceMappingURL=family-entry.d.ts.map