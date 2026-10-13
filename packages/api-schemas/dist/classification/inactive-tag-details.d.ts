import { z } from "zod/v4";
declare const ClassificationInactiveTagDetailsSchemaDefinition: z.ZodObject<{
    availableOverrides: z.ZodArray<z.ZodEnum<{
        ATTACH_INACTIVE: "ATTACH_INACTIVE";
        REACTIVATE: "REACTIVATE";
    }>>;
    conflictType: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        CLASSIFICATION_INACTIVE_TAG: "CLASSIFICATION_INACTIVE_TAG";
        DUPLICATE_CREATE_REVIEW: "DUPLICATE_CREATE_REVIEW";
        NEWS_SOURCE_URL: "NEWS_SOURCE_URL";
        STRICT_URL_LOOKUP: "STRICT_URL_LOOKUP";
        URL_DUPLICATE: "URL_DUPLICATE";
    }>, z.ZodString]>>;
    slug: z.ZodString;
    tagId: z.ZodInt;
}, z.core.$strip>;
type ClassificationInactiveTagDetailsDefinition = z.infer<typeof ClassificationInactiveTagDetailsSchemaDefinition>;
export interface ClassificationInactiveTagDetailsSchemaInput extends z.input<typeof ClassificationInactiveTagDetailsSchemaDefinition> {
}
/**
 * ProblemDetail.details for HTTP 409 when a classification value exists but is inactive.
 *
 * @openapiSchema ClassificationInactiveTagDetails
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape classification.inactive-tag-details
 * @contractRole canonical
 */
export declare const ClassificationInactiveTagDetailsSchema: z.ZodType<ClassificationInactiveTagDetailsDefinition, ClassificationInactiveTagDetailsSchemaInput>;
export type ClassificationInactiveTagDetails = z.infer<typeof ClassificationInactiveTagDetailsSchema>;
export {};
//# sourceMappingURL=inactive-tag-details.d.ts.map