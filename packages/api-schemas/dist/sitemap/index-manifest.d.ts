import { z } from "zod/v4";
declare const SitemapIndexManifestSchemaDefinition: z.ZodObject<{
    families: z.ZodArray<z.ZodType<{
        changeFrequency: "always" | "daily" | "hourly" | "monthly" | "never" | "weekly" | "yearly";
        eligibleUrlCount: number;
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        indexPath: string;
        indexPathMode: "pageBase" | "singleFile";
        latestUpdatedAt?: string | null | undefined;
        pageCount: number;
        priority: number;
    }, unknown, z.core.$ZodTypeInternals<{
        changeFrequency: "always" | "daily" | "hourly" | "monthly" | "never" | "weekly" | "yearly";
        eligibleUrlCount: number;
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        indexPath: string;
        indexPathMode: "pageBase" | "singleFile";
        latestUpdatedAt?: string | null | undefined;
        pageCount: number;
        priority: number;
    }, unknown>>>;
}, z.core.$strip>;
type SitemapIndexManifestDefinition = z.infer<typeof SitemapIndexManifestSchemaDefinition>;
/**
 * Manifest of dynamic sitemap families with O(1) freshness summaries
 *
 * @openapiSchema SitemapIndexManifest
 * @endpoint GET /v1/sitemap/index-manifest
 * @contractShape sitemap.index-manifest
 * @contractRole canonical
 */
export declare const SitemapIndexManifestSchema: z.ZodType<SitemapIndexManifestDefinition>;
export type SitemapIndexManifest = z.infer<typeof SitemapIndexManifestSchema>;
export {};
//# sourceMappingURL=index-manifest.d.ts.map