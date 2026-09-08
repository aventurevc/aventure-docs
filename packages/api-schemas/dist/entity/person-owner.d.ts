import { z } from "zod/v4";
/**
 * Exactly one of entityId or personId is set; ids only, no name fields. Resolve display names with GET /v1/entities/detail or GET /v1/people/detail.
 *
 * @openapiSchema EntityPersonOwner
 * @standardProblemResponse
 * @usedBySchema BlogPostSchema
 * @usedBySchema EntityFundraiseInvestorJoinSchema
 * @usedBySchema EntityTextSchema
 * @usedBySchema EntityUrlLinkSchema
 * @usedBySchema MediaScreenshotSchema
 * @usedBySchema NewsFilterSchema
 * @usedBySchema ResolvedHandleSchema
 * @usedBySchema UniqueIdSchema
 * @usedBySchema UrlDuplicateConflictSchema
 * @usedBySchema UrlDuplicateJoinSchema
 * @contractShape entity.person-owner
 * @contractRole canonical
 */
export declare const EntityPersonOwnerSchema: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
export type EntityPersonOwner = z.infer<typeof EntityPersonOwnerSchema>;
//# sourceMappingURL=person-owner.d.ts.map