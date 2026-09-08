import { z } from "zod/v4";
/**
 * Canonical entity type groups for boundary-level scope selection.
 *
 * @openapiSchema EntityTypeGroup
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterOptionSetMetaSchema
 * @usedBySchema EntityTypeGroupMembershipSchema
 * @contractShape entity.type-group
 * @contractRole canonical
 */
export declare const EntityTypeGroupSchema: z.ZodEnum<{
    Investor: "Investor";
    Organization: "Organization";
}>;
export type EntityTypeGroup = z.infer<typeof EntityTypeGroupSchema>;
//# sourceMappingURL=type-group.d.ts.map