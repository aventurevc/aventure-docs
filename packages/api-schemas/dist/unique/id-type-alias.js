// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UniqueIdOwnerScopeSchema } from "./id-owner-scope.js";
const UniqueIdTypeAliasSchemaDefinition = z.object({
    /** Other catalog-recognized spellings for this identifier type. */
    alias: z.array(z.string()),
    /** Canonical catalog identifier. Public reads and writes admit only types enabled for the public API. */
    canonical: z.string(),
    /** Human-readable label. */
    label: z.string(),
    /** Owner kinds this identifier type may attach to. */
    ownerScope: z.array(UniqueIdOwnerScopeSchema),
    /** Regex the identifier value must match, when constrained. */
    pattern: z.string().nullish(),
});
/**
 * An identifier type with its label, accepted spellings, whether it applies to entities or people, and its format pattern.
 *
 * @openapiSchema UniqueIdTypeAlias
 * @endpoint GET /v1/unique-ids/types
 * @contractShape unique.id-type-alias
 * @contractRole canonical
 */
export const UniqueIdTypeAliasSchema = UniqueIdTypeAliasSchemaDefinition;
//# sourceMappingURL=id-type-alias.js.map