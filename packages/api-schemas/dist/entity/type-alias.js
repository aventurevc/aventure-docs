// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityTypeAliasSchemaDefinition = z.object({
    /** Alias tokens accepted by EntityType.fromRaw (case-insensitive). */
    alias: z.array(z.string()),
    /** Canonical EntityType value (e.g. "Company", "Investment Firm"). */
    canonical: z.string(),
    /** Whether this EntityType can provide the parent route for a public Product/Service. */
    canOwnPublicProductServiceRoute: z.boolean(),
    /** Human-facing meaning of this EntityType. */
    description: z.string(),
    /** Nested public route segment shared by Product and Service records. */
    productServiceRouteSegment: z.string(),
    /** Public website path prefix for this EntityType. */
    publicPathPrefix: z.string(),
});
/**
 * Canonical EntityType value, accepted aliases, and public routing metadata.
 *
 * @openapiSchema EntityTypeAlias
 * @endpoint GET /v1/entities/types
 * @contractShape entity.type-alias
 * @contractRole canonical
 */
export const EntityTypeAliasSchema = EntityTypeAliasSchemaDefinition;
//# sourceMappingURL=type-alias.js.map