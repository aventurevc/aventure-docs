import { z } from "zod/v4";
/**
 * What a narrowing question narrows: place (headquarters country, state, or city), size (employee band), or type (one classification facet).
 *
 * @openapiSchema SearchNarrowingDimension
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingQuestionSchema
 * @contractShape search.narrowing-dimension
 * @contractRole canonical
 */
export declare const SearchNarrowingDimensionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    place: "place";
    size: "size";
    type: "type";
}>, z.ZodString]> & {
    enum: {
        place: "place";
        size: "size";
        type: "type";
    };
};
export type SearchNarrowingDimension = z.infer<typeof SearchNarrowingDimensionSchema>;
//# sourceMappingURL=narrowing-dimension.d.ts.map