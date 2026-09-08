// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Owner kind a unique-id type can attach to: entity or person.
 *
 * @openapiSchema UniqueIdOwnerScope
 * @endpoint GET /v1/unique-ids/types
 * @usedBySchema UniqueIdTypeAliasSchema
 * @contractShape unique.id-owner-scope
 * @contractRole canonical
 */
export const UniqueIdOwnerScopeSchema = z.enum(["entity", "person"]);
//# sourceMappingURL=id-owner-scope.js.map