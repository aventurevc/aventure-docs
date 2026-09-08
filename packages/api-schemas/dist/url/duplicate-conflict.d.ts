import { z } from "zod/v4";
declare const UrlDuplicateConflictSchemaDefinition: z.ZodObject<{
    existingJoin: z.ZodArray<z.ZodType<{
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        urlId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        urlId: number;
    }, unknown>>>;
    fragmentIgnored: z.ZodBoolean;
    guidance: z.ZodString;
    normalizedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestedOwner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    url: z.ZodString;
    urlType: z.ZodString;
}, z.core.$strip>;
type UrlDuplicateConflictDefinition = z.infer<typeof UrlDuplicateConflictSchemaDefinition>;
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a create/update attempts to set a URL with urlType=website (or another exclusive urlType) that is already a current URL on a different entity or person. The existingJoin list names every current owner of the normalized URL; resolve by demoting the existing owner (isCurrent=false, isPrimary=false) before promoting the new owner.
 *
 * @openapiSchema UrlDuplicateConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape url.duplicate-conflict
 * @contractRole canonical
 */
export declare const UrlDuplicateConflictSchema: z.ZodType<UrlDuplicateConflictDefinition>;
export type UrlDuplicateConflict = z.infer<typeof UrlDuplicateConflictSchema>;
export {};
//# sourceMappingURL=duplicate-conflict.d.ts.map