import { z } from "zod/v4";
declare const LocationSitemapBatchSchemaDefinition: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    letter: z.ZodString;
    scope: z.ZodEnum<{
        CITIES: "CITIES";
        CITY: "CITY";
        COUNTRIES: "COUNTRIES";
        COUNTRY: "COUNTRY";
        STATE: "STATE";
        STATES: "STATES";
        cities: "cities";
        city: "city";
        countries: "countries";
        country: "country";
        state: "state";
        states: "states";
    }>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LocationSitemapBatchDefinition = z.infer<typeof LocationSitemapBatchSchemaDefinition>;
/**
 * Request body for batch sitemap hydration
 *
 * @openapiSchema LocationSitemapBatch
 * @endpoint POST /v1/addresses/locations/batch
 * @contractShape location.sitemap-batch
 * @contractRole canonical
 */
export declare const LocationSitemapBatchSchema: z.ZodType<LocationSitemapBatchDefinition>;
export type LocationSitemapBatch = z.infer<typeof LocationSitemapBatchSchema>;
export {};
//# sourceMappingURL=sitemap-batch.d.ts.map