import { z } from "zod/v4";
declare const LocationSitemapSchemaDefinition: z.ZodObject<{
    company: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        content: z.ZodArray<z.ZodType<{
            family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
            imagePath?: string | null | undefined;
            lastUpdatedAt: string;
            path: string;
            slotKey: string;
            slug: string;
        }, unknown, z.core.$ZodTypeInternals<{
            family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
            imagePath?: string | null | undefined;
            lastUpdatedAt: string;
            path: string;
            slotKey: string;
            slug: string;
        }, unknown>>>;
        number: z.ZodInt;
        size: z.ZodInt;
        totalElements: z.ZodNumber;
        totalPages: z.ZodInt;
    }, z.core.$strip>>>;
    companyNextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    directory: z.ZodType<{
        content: {
            canonicalSlug: string;
            entityCount: number;
            identifier: {
                cityId?: number | null | undefined;
                cityName?: string | null | undefined;
                countryId?: number | null | undefined;
                countryIso2?: string | null | undefined;
                countryName?: string | null | undefined;
                scope: "city" | "country" | "state";
                stateAbbrev?: string | null | undefined;
                stateId?: number | null | undefined;
                stateName?: string | null | undefined;
            };
            latestUpdatedAt?: string | null | undefined;
            name: string;
            parentLabel?: string | null | undefined;
            slug: string;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown, z.core.$ZodTypeInternals<{
        content: {
            canonicalSlug: string;
            entityCount: number;
            identifier: {
                cityId?: number | null | undefined;
                cityName?: string | null | undefined;
                countryId?: number | null | undefined;
                countryIso2?: string | null | undefined;
                countryName?: string | null | undefined;
                scope: "city" | "country" | "state";
                stateAbbrev?: string | null | undefined;
                stateId?: number | null | undefined;
                stateName?: string | null | undefined;
            };
            latestUpdatedAt?: string | null | undefined;
            name: string;
            parentLabel?: string | null | undefined;
            slug: string;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown>>;
    directoryLetterCount: z.ZodRecord<z.ZodString, z.ZodNumber>;
    location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        canonicalSlug: z.ZodString;
        entityCount: z.ZodNumber;
        identifier: z.ZodType<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown>>;
        latestUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        name: z.ZodString;
        parentLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodString;
    }, z.core.$strip>>>;
    locationLetterCount: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNumber>>>;
    requestedLetter: z.ZodString;
    resolvedDirectoryLetter: z.ZodString;
    resolvedLocationLetter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodString;
    slugResolution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        canonicalSlug: z.ZodString;
        matched: z.ZodBoolean;
        outcome: z.ZodOptional<z.ZodEnum<{
            current: "current";
            unpublished: "unpublished";
        }>>;
        seoSlug: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type LocationSitemapDefinition = z.infer<typeof LocationSitemapSchemaDefinition>;
/**
 * Batch sitemap response with directory, exact letter counts, and optional company URL slots
 *
 * @openapiSchema LocationSitemap
 * @endpoint POST /v1/addresses/locations/batch
 * @contractShape location.sitemap
 * @contractRole canonical
 */
export declare const LocationSitemapSchema: z.ZodType<LocationSitemapDefinition>;
export type LocationSitemap = z.infer<typeof LocationSitemapSchema>;
export {};
//# sourceMappingURL=sitemap.d.ts.map