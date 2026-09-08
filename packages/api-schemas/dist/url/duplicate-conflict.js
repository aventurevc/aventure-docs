// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { UrlDuplicateJoinSchema } from "./duplicate-join.js";
const UrlDuplicateConflictSchemaDefinition = z.object({
    /** Every current owner that already holds the normalized URL with this urlType. Non-empty when this conflict is emitted. */
    existingJoin: z.array(UrlDuplicateJoinSchema),
    /** True when URL fragment differences were ignored during duplicate matching (i.e., the conflict ignores everything after '#'). */
    fragmentIgnored: z.boolean(),
    /** Human-readable guidance on how to resolve the conflict. Defaults to the standard inspect-then-demote/promote sequence. */
    guidance: z.string(),
    /** Normalized URL match key used for duplicate detection. Null when normalization could not produce a stable key (e.g., malformed input). */
    normalizedUrl: z.string().nullish(),
    /** Owner the caller attempted to attach the URL to. */
    requestedOwner: EntityPersonOwnerSchema,
    /** Raw URL as submitted by the caller (pre-normalization). */
    url: z.string(),
    /** URL type submitted by the caller (e.g., 'website', 'twitter'). The conflict applies only within this urlType. */
    urlType: z.string(),
});
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a create/update attempts to set a URL with urlType=website (or another exclusive urlType) that is already a current URL on a different entity or person. The existingJoin list names every current owner of the normalized URL; resolve by demoting the existing owner (isCurrent=false, isPrimary=false) before promoting the new owner.
 *
 * @openapiSchema UrlDuplicateConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape url.duplicate-conflict
 * @contractRole canonical
 */
export const UrlDuplicateConflictSchema = UrlDuplicateConflictSchemaDefinition;
//# sourceMappingURL=duplicate-conflict.js.map