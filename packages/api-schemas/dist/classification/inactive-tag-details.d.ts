import { z } from "zod/v4";
declare const ClassificationInactiveTagDetailsSchemaDefinition: z.ZodObject<{
    availableOverrides: z.ZodArray<z.ZodEnum<{
        ATTACH_INACTIVE: "ATTACH_INACTIVE";
        REACTIVATE: "REACTIVATE";
    }>>;
    slug: z.ZodString;
    tagId: z.ZodInt;
}, z.core.$strip>;
type ClassificationInactiveTagDetailsDefinition = z.infer<typeof ClassificationInactiveTagDetailsSchemaDefinition>;
/**
 * ProblemDetail.details for HTTP 409 when a classification value exists but is inactive.
 *
 * @openapiSchema ClassificationInactiveTagDetails
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape classification.inactive-tag-details
 * @contractRole canonical
 */
export declare const ClassificationInactiveTagDetailsSchema: z.ZodType<ClassificationInactiveTagDetailsDefinition>;
export type ClassificationInactiveTagDetails = z.infer<typeof ClassificationInactiveTagDetailsSchema>;
export {};
//# sourceMappingURL=inactive-tag-details.d.ts.map