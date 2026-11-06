// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DomainConflictTypeSchema } from "../domain/conflict-type.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { UrlDuplicateJoinSchema } from "./duplicate-join.js";
const UrlDuplicateConflictSchemaDefinition = z.object({
    /** Conflict kind that identifies this details shape. */
    conflictType: DomainConflictTypeSchema,
    /** Every entity or person that already has this URL (after normalization) with this urlType. Non-empty when this conflict is emitted. */
    existingJoin: z.array(UrlDuplicateJoinSchema),
    /** True when URL fragment differences were ignored during duplicate matching (i.e., the conflict ignores everything after '#'). */
    fragmentIgnored: z.boolean(),
    /** Human-readable guidance on how to resolve the conflict. Defaults to the standard identity and URL ownership checks. */
    guidance: z.string(),
    /** Normalized URL match key used for duplicate detection. Null when normalization could not produce a stable key (e.g., malformed input). */
    normalizedUrl: z.string().nullish(),
    /** Entity or person you tried to add the URL to. */
    requestedOwner: EntityPersonOwnerSchema,
    /** Raw URL as submitted by the caller (pre-normalization). */
    url: z.string(),
    /** URL type submitted by the caller (e.g., 'website', 'twitter'). The conflict applies only within this urlType. */
    urlType: z.string(),
});
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a create/update attempts to set a URL with urlType=website (or another exclusive urlType) that is already a current URL on a different entity or person. The existingJoin list names every current owner of the normalized URL; inspect its identity before changing ownership. A person holds one current LinkedIn person profile (/in/<slug>): a different one answers this conflict with existingJoin naming the person's own held row. An offering sharing its provider's homepage uses the provider relationship without a duplicate URL row.
 *
 * @openapiSchema UrlDuplicateConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape url.duplicate-conflict
 * @contractRole canonical
 */
export const UrlDuplicateConflictSchema = UrlDuplicateConflictSchemaDefinition;
//# sourceMappingURL=duplicate-conflict.js.map