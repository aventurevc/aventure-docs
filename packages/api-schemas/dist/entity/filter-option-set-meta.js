// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterOptionModeSchema } from "./filter-option-mode.js";
import { EntityTypeGroupMembershipSchema } from "./type-group-membership.js";
import { EntityTypeGroupSchema } from "./type-group.js";
/**
 * Generator metadata for a filter payload
 *
 * @openapiSchema EntityFilterOptionSetMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @usedBySchema EntityFilterOptionSetSchema
 * @contractShape entity.filter-option-set-meta
 * @contractRole canonical
 */
export const EntityFilterOptionSetMetaSchema = z.object({
    /** Default maximum option count */
    defaultOptionLimit: z.int(),
    /** Default type group */
    defaultTypeGroup: EntityTypeGroupSchema.optional(),
    /** Filter keys that include distribution data */
    distributionKey: z.array(z.string()),
    /** Generation timestamp */
    generatedAt: z.iso.datetime({ offset: true }),
    /** Whether distribution data is included */
    includeDistribution: z.boolean(),
    /** Entity type records included in the filter payload */
    includedTypeRecord: z.array(z.string()),
    /** Whether private filter options are included */
    includePrivate: z.boolean(),
    /** Option mode used to generate option lists */
    optionMode: EntityFilterOptionModeSchema,
    /** Requested entity type group */
    requestedTypeGroup: z.string(),
    /** Type group membership filter values */
    typeGroupMembership: z.array(EntityTypeGroupMembershipSchema).optional(),
});
//# sourceMappingURL=filter-option-set-meta.js.map