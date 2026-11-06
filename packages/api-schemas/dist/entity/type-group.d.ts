import { z } from "zod/v4";
/**
 * Groups of entity types, such as Organization, that a filter can select at once.
 *
 * @openapiSchema EntityTypeGroup
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
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