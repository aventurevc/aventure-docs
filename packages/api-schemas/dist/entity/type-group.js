// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const EntityTypeGroupSchema = z.enum(["Organization", "Investor"]);
//# sourceMappingURL=type-group.js.map