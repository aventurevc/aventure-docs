import { z } from "zod/v4";
/**
 * Headquarters level a place option filters on.
 *
 * @openapiSchema SearchPlaceLevel
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingOptionSchema
 * @contractShape search.place-level
 * @contractRole canonical
 */
export declare const SearchPlaceLevelSchema: z.ZodUnion<readonly [z.ZodEnum<{
    city: "city";
    country: "country";
    state: "state";
}>, z.ZodString]> & {
    enum: {
        city: "city";
        country: "country";
        state: "state";
    };
};
export type SearchPlaceLevel = z.infer<typeof SearchPlaceLevelSchema>;
//# sourceMappingURL=place-level.d.ts.map