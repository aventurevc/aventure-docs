import { z } from "zod/v4";
/**
 * Conflict kind that identifies which details shape a 409 response carries.
 *
 * @openapiSchema DomainConflictType
 * @standardProblemResponse
 * @usedBySchema ClassificationInactiveTagDetailsSchema
 * @usedBySchema DomainConflictDetailsSchema
 * @usedBySchema DuplicateCreateReviewSchema
 * @usedBySchema NewsSourceUrlConflictSchema
 * @usedBySchema StrictUrlLookupConflictSchema
 * @usedBySchema UrlDuplicateConflictSchema
 * @contractShape domain.conflict-type
 * @contractRole canonical
 */
export declare const DomainConflictTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    CLASSIFICATION_INACTIVE_TAG: "CLASSIFICATION_INACTIVE_TAG";
    DUPLICATE_CREATE_REVIEW: "DUPLICATE_CREATE_REVIEW";
    NEWS_SOURCE_URL: "NEWS_SOURCE_URL";
    STRICT_URL_LOOKUP: "STRICT_URL_LOOKUP";
    URL_DUPLICATE: "URL_DUPLICATE";
}>, z.ZodString]> & {
    enum: {
        CLASSIFICATION_INACTIVE_TAG: "CLASSIFICATION_INACTIVE_TAG";
        DUPLICATE_CREATE_REVIEW: "DUPLICATE_CREATE_REVIEW";
        NEWS_SOURCE_URL: "NEWS_SOURCE_URL";
        STRICT_URL_LOOKUP: "STRICT_URL_LOOKUP";
        URL_DUPLICATE: "URL_DUPLICATE";
    };
};
export type DomainConflictType = z.infer<typeof DomainConflictTypeSchema>;
//# sourceMappingURL=conflict-type.d.ts.map