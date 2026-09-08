// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const EntityPersonOwnerSchema = z.object({
    /** Canonical entity UUID */
    entityId: z.uuid().nullish(),
    /** Canonical person UUID */
    personId: z.uuid().nullish(),
});
//# sourceMappingURL=person-owner.js.map