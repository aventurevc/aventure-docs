import { z } from "zod/v4";
/**
 * Source-reported standing of a ticker assignment, not the entity's operating or ownership state.
 *
 * @openapiSchema UniqueIdListingStanding
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema UniqueIdMutationSchema
 * @usedBySchema UniqueIdSchema
 * @contractShape unique.id-listing-standing
 * @contractRole canonical
 */
export declare const UniqueIdListingStandingSchema: z.ZodUnion<readonly [z.ZodEnum<{
    delisted: "delisted";
    listed: "listed";
    suspended: "suspended";
}>, z.ZodString]> & {
    enum: {
        delisted: "delisted";
        listed: "listed";
        suspended: "suspended";
    };
};
export type UniqueIdListingStanding = z.infer<typeof UniqueIdListingStandingSchema>;
//# sourceMappingURL=id-listing-standing.d.ts.map