import { z } from "zod/v4";
/**
 * Single directory entry (country/state/city) for sitemap
 *
 * @openapiSchema LocationDirectoryEntry
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @usedBySchema PageLocationDirectoryEntrySchema
 * @usedBySchema PageResultLocationDirectoryEntrySchema
 * @contractShape location.directory-entry
 * @contractRole canonical
 */
export declare const LocationDirectoryEntrySchema: z.ZodObject<{
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
}, z.core.$strip>;
export type LocationDirectoryEntry = z.infer<typeof LocationDirectoryEntrySchema>;
//# sourceMappingURL=directory-entry.d.ts.map