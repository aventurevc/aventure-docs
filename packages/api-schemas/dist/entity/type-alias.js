// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityTypeAliasSchemaDefinition = z.object({
    /** Other spellings accepted for this entity type (case-insensitive). */
    alias: z.array(z.string()),
    /** Canonical EntityType value (e.g. "Company", "Investment Firm"). */
    canonical: z.string(),
    /** Whether this EntityType can provide the parent route for a public Product/Service. */
    canOwnPublicProductServiceRoute: z.boolean(),
    /** Human-facing meaning of this EntityType. */
    description: z.string(),
    /** Nested public route segment shared by Product and Service records. */
    productServiceRouteSegment: z.string(),
    /** Published website family prefix. Product and Service retain the legacy `/companies/products-services` family metadata, not a standalone route; their pages require `{providerPrefix}/{providerSlug}/products-services/{slug}`. */
    publicPathPrefix: z.string(),
});
/**
 * An entity type, its accepted alternative spellings, and how its public pages are addressed.
 *
 * @openapiSchema EntityTypeAlias
 * @endpoint GET /v1/entities/types
 * @contractShape entity.type-alias
 * @contractRole canonical
 */
export const EntityTypeAliasSchema = EntityTypeAliasSchemaDefinition;
//# sourceMappingURL=type-alias.js.map