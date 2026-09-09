// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeGroupSchema } from "./type-group.js";
import { EntityTypeSchema } from "./type.js";
const EntityTypeGroupMembershipSchemaDefinition = z.object({
    typeGroup: EntityTypeGroupSchema,
    typeRecord: z.array(EntityTypeSchema),
});
/**
 * Canonical concrete entity types included by one entity type group.
 *
 * @openapiSchema EntityTypeGroupMembership
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @usedBySchema EntityFilterOptionSetMetaSchema
 * @contractShape entity.type-group-membership
 * @contractRole canonical
 */
export const EntityTypeGroupMembershipSchema = EntityTypeGroupMembershipSchemaDefinition;
//# sourceMappingURL=type-group-membership.js.map