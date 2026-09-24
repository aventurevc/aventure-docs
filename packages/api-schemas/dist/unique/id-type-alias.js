// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UniqueIdOwnerScopeSchema } from "./id-owner-scope.js";
const UniqueIdTypeAliasSchemaDefinition = z.object({
    /** Alias tokens accepted by the write boundary. */
    alias: z.array(z.string()),
    /** Canonical uniqueId type value persisted in id_type. */
    canonical: z.string(),
    /** Human-readable label. */
    label: z.string(),
    /** Owner kinds this identifier type may attach to. */
    ownerScope: z.array(UniqueIdOwnerScopeSchema),
    /** Regex the identifier value must match, when constrained. */
    pattern: z.string().nullish(),
});
/**
 * Canonical uniqueId type value plus its label, accepted aliases, owner scope, and format pattern.
 *
 * @openapiSchema UniqueIdTypeAlias
 * @endpoint GET /v1/unique-ids/types
 * @contractShape unique.id-type-alias
 * @contractRole canonical
 */
export const UniqueIdTypeAliasSchema = UniqueIdTypeAliasSchemaDefinition;
//# sourceMappingURL=id-type-alias.js.map